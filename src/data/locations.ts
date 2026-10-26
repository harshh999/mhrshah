import type { Location } from "@/types";
import { brand } from "./brand";

export const locations: Location[] = [
  {
    id: "manjalpur",
    name: "Manjalpur",
    address:
      "Shop No. 8, Amarjyot Shopping Center, Nr. Spandan Circle, Lalbaug Dairy Road, Manjalpur, Vadodara",
    phone: brand.phone,
    mapsQuery:
      "Shree Rajrajeshwari Ice Cream Juice Parlour Amarjyot Shopping Center Spandan Circle Manjalpur Vadodara",
  },
  {
    id: "fatehgunj",
    name: "Fatehgunj",
    address:
      "21, Eastern Society, Near Frigtemp Hot Dog, Fatehgunj Main Road, Vadodara",
    phone: brand.phone,
    mapsQuery:
      "Shree Rajrajeshwari Ice Cream Juice Parlour Eastern Society Fatehgunj Main Road Vadodara",
  },
  {
    id: "nizampura",
    name: "Nizampura",
    address:
      "G-4, Vraj Complex, Opp. Gelani Petrol Pump, Nizampura Main Road, Vadodara",
    phone: brand.phone,
    mapsQuery:
      "Shree Rajrajeshwari Ice Cream Juice Parlour Vraj Complex Nizampura Main Road Vadodara",
  },
  {
    id: "uma-char-rasta",
    name: "Uma Char Rasta",
    address:
      "Shop No. 2, Indraprasth Complex, Near Uma Char Rasta, Waghodiya Road, Vadodara",
    phone: brand.phone,
    mapsQuery:
      "Shree Rajrajeshwari Ice Cream Juice Parlour Indraprasth Complex Uma Char Rasta Waghodiya Road Vadodara",
  },
  {
    id: "ellora-park",
    name: "Ellora Park",
    address:
      "Shop L 1/4, National Flat, Ellora Park Main Road, Subhanpura, Vadodara",
    phone: brand.phone,
    mapsQuery:
      "Shree Rajrajeshwari Ice Cream Juice Parlour National Flat Ellora Park Main Road Subhanpura Vadodara",
  },
];

export const mapsHref = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
