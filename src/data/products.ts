import type { Product } from "@/types";
import { images } from "@/data/images";

export const bestSellers: Product[] = [
  {
    id: "watermelon-juice-1",
    name: "Watermelon Juice",
    description: "100% fresh, cold-pressed watermelon juice to keep you refreshed and hydrated.",
    image: images.bestsellers.mangoThickShake,
    tag: "Seasonal",
  },
  {
    id: "fruit-shots",
    name: "Fruit Shots",
    description: "A vibrant, nutrient-packed medley of seasonal fresh fruit juices served in fun, intense shots.",
    image: images.bestsellers.specialFalooda,
    tag: "Signature",
  },
  {
    id: "mango-shake",
    name: "Mango Shake",
    description: "Creamy, rich milkshake blended with fresh sweet Alphonso mangoes.",
    image: images.gallery.mangoShake,
  },
  {
    id: "kiwi-shots",
    name: "Kiwi Shots",
    description: "Tangy and refreshing kiwi nectar shots packed with vitamin C.",
    image: images.bestsellers.chocolateSundae,
    tag: "Family pick",
  },
  {
    id: "dragonfruit-juice",
    name: "Dragonfruit Juice",
    description: "Exotic and refreshing pink dragonfruit juice, freshly squeezed and chilled.",
    image: images.bestsellers.orangeJuice,
  },
  {
    id: "watermelon-juice-2",
    name: "Watermelon Juice",
    description: "Cool, crisp, and naturally sweet watermelon juice — the ultimate thirst quencher.",
    image: images.gallery.juices,
    tag: "Premium",
  },
];
