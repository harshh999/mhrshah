import type { Product } from "@/types";
import { images } from "@/data/images";

export const bestSellers: Product[] = [
  {
    id: "fresh-mix-berries",
    name: "Fresh Mix Berries Juice",
    description: "Premium berry blend rich in antioxidants — a vibrant mix of strawberry, blueberry, and raspberry.",
    image: images.bestsellers.mangoThickShake,
    price: 190,
    tag: "Bestseller ★",
  },
  {
    id: "kaju-anjeer-milkshake",
    name: "Kaju Anjeer Milkshake",
    description: "Rich dry fruit milkshake — a signature classic made with premium cashews and figs.",
    image: images.bestsellers.dryFruitShake,
    price: 190,
    tag: "Bestseller ★",
  },
  {
    id: "rajbhog-falooda",
    name: "Rajbhog Falooda",
    description: "Royal traditional falooda with generous ice cream, rose syrup, and vermicelli.",
    image: images.bestsellers.specialFalooda,
    price: 130,
    tag: "Bestseller ★",
  },
  {
    id: "avocado-shake",
    name: "Avocado Shake",
    description: "Creamy, healthy, and indulgent — a smooth blend of fresh avocado and chilled milk.",
    image: images.bestsellers.orangeJuice,
    price: 210,
    tag: "Bestseller ★",
  },
  {
    id: "fresh-strawberry-juice",
    name: "Fresh Strawberry Juice",
    description: "Seasonal bestseller, pure and vibrant — freshly pressed strawberries at their peak.",
    image: images.bestsellers.sitafalIceCream,
    price: 110,
    tag: "Bestseller ★",
  },
  {
    id: "blueberry-thick-shake",
    name: "Blueberry Thick Shake",
    description: "Premium signature thick shake blended with fresh blueberries and creamy ice cream.",
    image: images.bestsellers.chocolateSundae,
    price: 150,
    tag: "Bestseller ★",
  },
];
