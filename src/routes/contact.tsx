import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { brand } from "@/data/brand";
import { locations } from "@/data/locations";
import { Clock, Instagram, Send, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-cream pt-32 pb-16 sm:pt-40">
        <Container>
          <SectionHeading
            eyebrow="Say hello"
            title="We'd love to hear from you."
            subtitle="Questions, party orders, or just a sweet hello — we're a message away."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl text-foreground">Reach us</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-cream text-brand-orange">
                    <Instagram className="size-4" />
                  </span>
                  <div>
                    <div className="font-medium text-foreground">Instagram</div>
                    <a
                      href={brand.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-brand-orange"
                    >
                      {brand.instagramHandle}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-cream text-brand-orange">
                    <Clock className="size-4" />
                  </span>
                  <div>
                    <div className="font-medium text-foreground">Open hours</div>
                    <div className="text-muted-foreground">{brand.hours}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-cream text-brand-orange">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <div className="font-medium text-foreground">Visit a branch</div>
                    <ul className="mt-1 space-y-1 text-muted-foreground">
                      {locations.map((l) => (
                        <li key={l.id}>{l.name}, Vadodara</li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)] sm:p-9">
              {submitted ? (
                <div className="rounded-2xl bg-cream/70 p-8 text-center border border-brand-orange/20">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    Thank you{form.name ? `, ${form.name}` : ""}!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                    We've received your note. You can also connect with us directly on Instagram for the latest updates.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={brand.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-warm)] px-6 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
                    >
                      <Instagram className="size-4" />
                      View on Instagram
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setForm({ name: "", email: "", message: "" });
                        setSubmitted(false);
                      }}
                      className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground hover:bg-cream"
                    >
                      Send another note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <h2 className="font-display text-2xl text-foreground">Send us a message</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Drop us a note or connect with us on Instagram.
                  </p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                      Your name
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-11 rounded-xl border border-input bg-background px-3 text-sm font-normal text-foreground outline-none transition-colors focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                        placeholder="e.g. Riya Shah"
                      />
                    </label>
                    <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                      Email (optional)
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-11 rounded-xl border border-input bg-background px-3 text-sm font-normal text-foreground outline-none transition-colors focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                        placeholder="e.g. riya@example.com"
                      />
                    </label>
                  </div>

                  <label className="mt-5 flex flex-col gap-2 text-sm font-medium text-foreground">
                    Message
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="rounded-xl border border-input bg-background px-3 py-2 text-sm font-normal text-foreground outline-none transition-colors focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                      placeholder="Tell us what you'd like to ask or say..."
                    />
                  </label>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-warm)] px-6 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
                    >
                      <Send className="size-4" />
                      Send Message
                    </button>
                    <a
                      href={brand.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground hover:border-brand-orange hover:text-brand-orange transition-colors"
                    >
                      <Instagram className="size-4" />
                      Connect on Instagram
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
