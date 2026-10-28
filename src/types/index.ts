export type Location = {
  id: string;
  name: string;
  address: string;
  mapsQuery: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  tag?: string;
};

export type CategoryTheme = {
  /** Tailwind gradient classes for the category banner background */
  gradient: string;
  /** Accent text color class for headings on the banner */
  accent: string;
  /** Single emoji used as a decorative motif */
  emoji: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  itemCount: string;
  image?: string;
  theme?: CategoryTheme;
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type MenuItem = {
  name: string;
  /** Base price in INR */
  price: number;
  /** Optional second price (e.g. milkshake "with ice cream") */
  priceAlt?: number;
  description?: string;
  badge?: string;
};

export type MenuSection = {
  id: string;
  name: string;
  description?: string;
  /** Optional secondary price column label, e.g. "With Ice Cream" */
  altLabel?: string;
  theme: CategoryTheme;
  items: MenuItem[];
};

export type Testimonial = {
  id: string;
  name: string;
  area: string;
  quote: string;
  rating: number;
};
