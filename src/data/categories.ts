import type { Category } from "@/types";
import { images } from "@/data/images";

export const categories: Category[] = [
  {
    id: "juices",
    name: "Fresh Juices",
    description: "Cold-pressed daily from seasonal fruits.",
    itemCount: "55+ varieties",
    image: images.categories.juices,
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    description: "Classic flavours blended with real ice cream.",
    itemCount: "50+ varieties",
    image: images.categories.milkshakes,
  },
  {
    id: "thickshakes",
    name: "Thick Shakes",
    description: "Spoonable, indulgent, loaded with toppings.",
    itemCount: "25+ varieties",
    image: images.categories.thickshakes,
  },
  {
    id: "faloodas",
    name: "Falooda",
    description: "Rose, kesar, dry fruit — the classic dessert drink.",
    itemCount: "11 varieties",
    image: images.categories.faloodas,
  },
  {
    id: "icecreams",
    name: "Ice Cream",
    description: "Hand-scooped, traditional and seasonal flavours.",
    itemCount: "21 varieties",
    image: images.categories.icecreams,
  },
  {
    id: "smoothies",
    name: "Smoothies (Coladas)",
    description: "Creamy fruit coladas — blended thick and chilled.",
    itemCount: "16 varieties",
    image: images.categories.lassi,
  },
  {
    id: "mocktails",
    name: "Mocktails",
    description: "Sparkling, fruity & fun — zero alcohol, full flavour.",
    itemCount: "7 varieties",
    image: images.categories.thickshakes,
  },
];
