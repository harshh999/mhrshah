import type { Category } from "@/types";
import { images } from "@/data/images";

export const categories: Category[] = [
  {
    id: "juices",
    name: "Fresh Juices",
    description: "Cold-pressed daily from seasonal fruits.",
    image: images.categories.juices,
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    description: "Classic flavours blended with real ice cream.",
    image: images.categories.milkshakes,
  },
  {
    id: "thickshakes",
    name: "Thick Shakes",
    description: "Spoonable, indulgent, loaded with toppings.",
    image: images.categories.thickshakes,
  },
  {
    id: "icecreams",
    name: "Ice Creams",
    description: "Hand-scooped, traditional and seasonal flavours.",
    image: images.categories.icecreams,
  },
  {
    id: "faloodas",
    name: "Faloodas",
    description: "Rose, kesar, dry fruit — the classic dessert drink.",
    image: images.categories.faloodas,
  },
  {
    id: "lassi",
    name: "Lassi",
    description: "Thick, creamy and served chilled.",
    image: images.categories.lassi,
  },
];
