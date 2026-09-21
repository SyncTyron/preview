import { useLanguage } from "../context/LanguageContext";

const galleryImages = [
  {
    src: "/img/gallery-1.jpg",
    alt: "Fassadenreiniger reinigt die Glasfront eines modernen Bürogebäudes.",
    span: "md:col-span-7 md:row-span-2",
    w: 1600, h: 1200,
  },
  {
    src: "/img/gallery-2.jpg",
    alt: "Nahaufnahme eines Abziehers bei der streifenfreien Fensterreinigung.",
    span: "md:col-span-5",
    w: 1200, h: 800,
  },
  {
    src: "/img/gallery-3.jpg",
    alt: "Gepflegte Grünanlage mit blühenden Beeten und getrimmten Hecken.",
    span: "md:col-span-5",
    w: 1200, h: 800,
  },
  {
    src: "/img/gallery-4.jpg",
    alt: "Gärtner schneidet mit einer Heckenschere einen Strauch in Form.",
    span: "md:col-span-6",
    w: 1200, h: 800,
  },
  {
    src: "/img/gallery-5.jpg",
    alt: "Räumfahrzeug im Winterdienst-Einsatz auf einer verschneiten Straße.",
    span: "md:col-span-6",
    w: 1200, h: 800,
  },
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" data-testid="gallery-section" className="py-20 md:py-32 bg-[#F5F5F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-10 md:mb-14 animate-fade-in-up">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#0e6fb3] font-manrope">
            {t.gallery.overline}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] font-outfit mt-3 mb-4">
            <a href="/#gallery" className="text-inherit no-underline pointer-events-none">{t.gallery.title}</a>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#57534E] font-manrope max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              data-testid={`gallery-image-${i}`}
              style={{ animationDelay: `${i * 60}ms` }}
              className={`overflow-hidden rounded-sm group cursor-pointer animate-fade-in-up ${
                i === 0 ? "col-span-2 md:col-span-7 md:row-span-2" : `col-span-1 ${img.span}`
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 ? "min-h-[250px] sm:min-h-[300px] md:min-h-[440px]" : "min-h-[160px] sm:min-h-[200px] md:min-h-[210px]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
