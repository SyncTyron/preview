/* Roda - Craco Config
 * Absolute URLs in CSS (z.B. url('/fonts/outfit.woff2')) NICHT von webpack
 * verarbeiten lassen - Browser loest sie zur Laufzeit auf den statischen
 * Pfad in /build/fonts/ auf.
 */
const path = require('path');

const walkRules = (rules, fn) => {
  for (const rule of rules || []) {
    if (rule.oneOf) walkRules(rule.oneOf, fn);
    if (rule.rules) walkRules(rule.rules, fn);
    if (rule.use) {
      const uses = Array.isArray(rule.use) ? rule.use : [rule.use];
      for (const u of uses) if (u && typeof u === 'object') fn(u);
    }
    if (rule.loader && typeof rule === 'object') fn(rule);
  }
};

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@fonts': path.resolve(__dirname, 'public/fonts'),
    },
    configure: (cfg) => {
      walkRules(cfg.module && cfg.module.rules, (u) => {
        const loader = (u.loader || '').replace(/\\/g, '/');
        if (loader.includes('/css-loader/') || /\bcss-loader\b/.test(loader)) {
          u.options = u.options || {};
          u.options.url = {
            filter: (url /*, resourcePath */) => {
              // absolute URLs (//, http(s), data:, /...) NICHT verarbeiten
              if (!url) return false;
              if (url.startsWith('/')) return false;
              if (url.startsWith('http')) return false;
              if (url.startsWith('data:')) return false;
              return true;
            },
          };
        }
      });
      return cfg;
    },
  },
};
