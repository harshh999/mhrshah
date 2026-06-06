import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/data/brand";
import { locations } from "@/data/locations";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-brand-orange">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-warm)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Please try again.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-warm)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-cream"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "IceCreamShop",
  name: brand.fullName,
  url: "/",
  telephone: brand.phone,
  servesCuisine: ["Ice Cream", "Juices", "Faloodas", "Desserts", "Indian"],
  priceRange: "₹",
  openingHours: "Mo-Su 10:00-24:00",
  sameAs: [brand.instagram],
  address: locations.map((l) => ({
    "@type": "PostalAddress",
    streetAddress: l.address,
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  })),
  location: locations.map((l) => ({
    "@type": "Place",
    name: `${brand.short} — ${l.name}`,
    address: l.address,
    telephone: l.phone,
  })),
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${brand.fullName} — Ice Cream, Juice & Falooda in Vadodara` },
      {
        name: "description",
        content: brand.description,
      },
      { name: "theme-color", content: "#F57C00" },
      { name: "author", content: brand.fullName },
      { property: "og:site_name", content: brand.fullName },
      { property: "og:type", content: "website" },
      { property: "og:title", content: `${brand.fullName} — Ice Cream, Juice & Falooda` },
      { property: "og:description", content: brand.description },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Shree Raj Rajeshwari" },
      { property: "og:title", content: "Shree Raj Rajeshwari" },
      { name: "twitter:title", content: "Shree Raj Rajeshwari" },
      { name: "description", content: "A modern Next.js website for Shree Rajrajeshwari Ice Cream & Juice Parlour, showcasing premium desserts and beverages." },
      { property: "og:description", content: "A modern Next.js website for Shree Rajrajeshwari Ice Cream & Juice Parlour, showcasing premium desserts and beverages." },
      { name: "twitter:description", content: "A modern Next.js website for Shree Rajrajeshwari Ice Cream & Juice Parlour, showcasing premium desserts and beverages." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/xp1Z18E4tZefozvLBvn1B6NR6qS2/social-images/social-1780560775370-RR_LOGO.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/xp1Z18E4tZefozvLBvn1B6NR6qS2/social-images/social-1780560775370-RR_LOGO.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="min-h-[100dvh]">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
