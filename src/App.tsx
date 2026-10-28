import { HashRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import HomePage from "@/routes/index";
import MenuPage from "@/routes/menu";
import ContactPage from "@/routes/contact";
import { brand } from "@/data/brand";

// Dynamically updates the page title and meta description for SEO
function ScrollToTopAndSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const hashTarget = window.location.hash.split("#").pop()?.replace(/^\//, "");
    if (hashTarget && (hashTarget === "locations" || ["manjalpur", "fatehgunj", "nizampura", "uma-char-rasta", "ellora-park"].includes(hashTarget))) {
      setTimeout(() => {
        document.getElementById(hashTarget)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    let title = `${brand.fullName} — Fresh Juice, Ice Cream & Falooda in Vadodara`;
    let description = brand.description;

    if (pathname === "/menu") {
      title = `Menu & Prices — ${brand.fullName}`;
      description = "Explore our full menu — fresh juices, milkshakes, thick shakes, ice creams, faloodas, smoothies, lassi, mocktails & fruit shorts. Made fresh daily across 5 locations in Vadodara.";
    } else if (pathname === "/contact") {
      title = `Contact — ${brand.fullName}`;
      description = `Get in touch with ${brand.fullName}. Reach out on Instagram, send us a message, or visit any of our 5 Vadodara branches.`;
    }

    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <HashRouter>
      <ScrollToTopAndSEO />
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main id="main" className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/locations" element={<Navigate to="/" replace />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
