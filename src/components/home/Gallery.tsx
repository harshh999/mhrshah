import { useState } from "react";
import { X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { gallery } from "@/data/gallery";

export function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="A peek inside the parlour."
          subtitle="Closeups of the things we make, and the families that make us."
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[260px]">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className={`group overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-lift)] ${g.tall ? "row-span-2" : ""}`}
              onClick={() => setLightboxIdx(i)}
              role="button"
              tabIndex={0}
              aria-label={`View ${g.alt}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxIdx(i);
                }
              }}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </figure>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIdx !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightboxIdx(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close lightbox"
            >
              <X className="size-6" />
            </button>
            <img
              src={gallery[lightboxIdx].src}
              alt={gallery[lightboxIdx].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Navigation arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx((prev) =>
                    prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0
                  );
                }}
                className="rounded-full bg-white/20 p-3 text-white transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Previous image"
              >
                ←
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx((prev) =>
                    prev !== null ? (prev + 1) % gallery.length : 0
                  );
                }}
                className="rounded-full bg-white/20 p-3 text-white transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
