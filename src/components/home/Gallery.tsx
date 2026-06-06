import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { gallery } from "@/data/gallery";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="A peek inside the parlour."
          subtitle="Closeups of the things we make, and the families that make us."
        />

        <div className="columns-2 gap-4 sm:gap-5 md:columns-3 lg:columns-4 [&>*]:mb-4 sm:[&>*]:mb-5">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className="group break-inside-avoid overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={
                  "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 " +
                  (g.tall ? "aspect-[3/4]" : "aspect-[4/3]")
                }
              />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
