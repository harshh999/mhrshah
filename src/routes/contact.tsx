import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { brand } from "@/data/brand";
import { locations } from "@/data/locations";
import { Phone, Clock, Instagram, Send, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hi! I'm ${form.name || "—"} (${form.phone || "—"}).\n\n${form.message || ""}`.trim();
    const url = `${brand.whatsappHref}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
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
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <div className="font-medium text-foreground">Call us</div>
                    <a href={brand.phoneHref} className="text-muted-foreground hover:text-brand-orange">
                      {brand.phone}
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
                    <Instagram className="size-4" />
                  </span>
                  <div>
                    <div className="font-medium text-foreground">Follow on Instagram</div>
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

            <form
              onSubmit={onSubmit}
              className="lg:col-span-3 rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)] sm:p-9"
            >
              <h2 className="font-display text-2xl text-foreground">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Submitting opens WhatsApp with your message — fast and easy.
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
                  Phone (optional)
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-11 rounded-xl border border-input bg-background px-3 text-sm font-normal text-foreground outline-none transition-colors focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                    placeholder="+91 ..."
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
                  placeholder="Tell us what you'd like to order or ask..."
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-warm)] px-6 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
              >
                <Send className="size-4" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
