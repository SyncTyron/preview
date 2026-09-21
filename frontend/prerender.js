#!/usr/bin/env node
/**
 * Prerender-Script – schreibt pro Route eigenen Title/Description/Canonical ins HTML
 */
const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const PORT = 45678;
const ROUTES = ['/', '/agb', '/widerruf', '/impressum', '/datenschutz'];

function serve() {
  return new Promise(resolve => {
    const MIME = {
      '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
      '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
      '.webp': 'image/webp', '.woff2': 'font/woff2', '.json': 'application/json',
      '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml',
    };
    const server = http.createServer((req, res) => {
      const urlPath = req.url.split('?')[0];
      let fp = path.join(BUILD_DIR, urlPath);
      try {
        if (fs.existsSync(fp) && fs.statSync(fp).isFile()) {
        } else if (fs.existsSync(fp) && fs.statSync(fp).isDirectory()) {
          fp = path.join(fp, 'index.html');
        } else {
          fp = path.join(BUILD_DIR, 'index.html');
        }
        const ext = path.extname(fp).toLowerCase();
        res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
        res.end(fs.readFileSync(fp));
      } catch (e) {
        res.statusCode = 404; res.end('Not found');
      }
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

(async () => {
  if (!fs.existsSync(path.join(BUILD_DIR, 'index.html'))) {
    console.error('[prerender] build/index.html fehlt');
    process.exit(1);
  }

  const server = await serve();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  let ok = 0, fail = 0;
  for (const route of ROUTES) {
    const url = `http://127.0.0.1:${PORT}${route}`;
    try {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.waitForFunction(
        () => document.querySelector('#root') && document.querySelector('#root').children.length > 0,
        { timeout: 10000 }
      );
      await new Promise(r => setTimeout(r, 1200)); // Helmet braucht Zeit

      // Extrahiere die echten Helmet-Werte aus dem DOM (nicht aus HTML-String!)
      const meta = await page.evaluate(() => {
        const getMeta = (sel) => {
          const el = document.querySelector(sel);
          return el ? el.getAttribute('content') : null;
        };
        const getLinkHref = (sel) => {
          const el = document.querySelector(sel);
          return el ? el.getAttribute('href') : null;
        };
        return {
          title: document.title,
          description: getMeta('meta[name="description"]'),
          canonical: getLinkHref('link[rel="canonical"]'),
          ogTitle: getMeta('meta[property="og:title"]'),
          ogDesc: getMeta('meta[property="og:description"]'),
          ogUrl: getMeta('meta[property="og:url"]'),
        };
      });

      let html = await page.content();

      // --- AGGRESSIVES CLEANUP: alte Tags raus, neue rein ---
      // 1. Alle existierenden <title>-Tags entfernen
      html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '');
      // 2. Alle description/canonical/og-Tags entfernen
      html = html.replace(/<meta[^>]+name=["']description["'][^>]*>/gi, '');
      html = html.replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, '');
      html = html.replace(/<meta[^>]+property=["']og:title["'][^>]*>/gi, '');
      html = html.replace(/<meta[^>]+property=["']og:description["'][^>]*>/gi, '');
      html = html.replace(/<meta[^>]+property=["']og:url["'][^>]*>/gi, '');
      html = html.replace(/<meta[^>]+name=["']twitter:title["'][^>]*>/gi, '');
      html = html.replace(/<meta[^>]+name=["']twitter:description["'][^>]*>/gi, '');

      // 3. Saubere, einzigartige Tags direkt nach <head> einfügen
      const esc = (s) => String(s || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const newTags = [
        `<title>${esc(meta.title)}</title>`,
        meta.description ? `<meta name="description" content="${esc(meta.description)}"/>` : '',
        meta.canonical ? `<link rel="canonical" href="${esc(meta.canonical)}"/>` : '',
        meta.ogTitle ? `<meta property="og:title" content="${esc(meta.ogTitle)}"/>` : '',
        meta.ogDesc ? `<meta property="og:description" content="${esc(meta.ogDesc)}"/>` : '',
        meta.ogUrl ? `<meta property="og:url" content="${esc(meta.ogUrl)}"/>` : '',
      ].filter(Boolean).join('\n    ');
      html = html.replace(/<head[^>]*>/i, m => `${m}\n    ${newTags}`);

      const outDir = route === '/' ? BUILD_DIR : path.join(BUILD_DIR, route);
      fs.mkdirSync(outDir, { recursive: true });
      const outFile = path.join(outDir, 'index.html');
      fs.writeFileSync(outFile, html);
      console.log(`[prerender] ✓ ${route.padEnd(15)} title="${meta.title}"`);
      await page.close();
      ok++;
    } catch (e) {
      console.error(`[prerender] ✗ ${route}: ${e.message}`);
      fail++;
    }
  }

  await browser.close();
  server.close();
  console.log(`[prerender] fertig: ${ok} OK, ${fail} Fehler`);
  process.exit(fail > 0 ? 1 : 0);
})();
