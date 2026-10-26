/**
 * Centralized image & video references.
 *
 * All visual assets live in /public so they can be swapped without code changes.
 * Replace the file at the path below — the site will pick up the new asset
 * automatically on the next load.
 */

export const images = {
  logo: "/images/logo/logo.png",

  hero: {
    image: "/images/hero/hero.png",
    video: "/videos/hero-video.mp4",
  },

  bestsellers: {
    mangoThickShake: "/images/bestsellers/bestseller-watermelon-juice.jpeg",
    specialFalooda: "/images/bestsellers/bestseller-special-falooda.jpeg",
    sitafalIceCream: "/images/bestsellers/bestseller-sitafal-ice-cream.jpeg",
    orangeJuice: "/images/bestsellers/bestseller-orange-juice.jpeg",
    dryFruitShake: "/images/bestsellers/bestseller-dry-fruit-shake.jpeg",
    chocolateSundae: "/images/bestsellers/bestseller-chocolate-sundae.jpeg",
  },

  categories: {
    juices: "/images/categories/category-juices.jpg",
    milkshakes: "/images/categories/category-milkshakes.jpg",
    thickshakes: "/images/categories/category-thickshakes.jpg",
    icecreams: "/images/categories/category-icecreams.jpg",
    faloodas: "/images/categories/category-faloodas.jpg",
    lassi: "/images/categories/category-lassi.jpg",
  },

  gallery: {
    falooda: "/images/gallery/gallery-01-falooda.jpg",
    juices: "/images/gallery/gallery-02-juices.jpg",
    mangoShake: "/images/gallery/gallery-03-mango-shake.jpg",
    icecreams: "/images/gallery/gallery-04-icecreams.jpg",
    sundae: "/images/gallery/gallery-05-sundae.jpg",
    orangeJuice: "/images/gallery/gallery-06-orange-juice.jpg",
    lassi: "/images/gallery/gallery-07-lassi.jpg",
    dryfruit: "/images/gallery/gallery-08-dryfruit.jpg",
    sitafal: "/images/gallery/gallery-09-sitafal.jpg",
    family: "/images/gallery/gallery-10-family.jpg",
  },

  story: {
    store: "/images/story/story-store.jpg",
    founder: "/images/story/story-founder.jpg",
  },

  locations: {
    manjalpur: "/images/locations/location-manjalpur.jpg",
    fatehgunj: "/images/locations/location-fatehgunj.jpg",
    nizampura: "/images/locations/location-nizampura.jpg",
    umaCharRasta: "/images/locations/location-uma-char-rasta.jpg",
    elloraPark: "/images/locations/location-ellora-park.jpg",
  },
} as const;
