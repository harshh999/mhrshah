import { cn } from "@/lib/utils";
import { images } from "@/data/images";

/**
 * Official Shree Rajrajeshwari brand logo.
 * Source file: /public/images/logo/logo.jpg (swap to update everywhere).
 */
export function BrandLogo({
  className,
  size = "md",
  variant = "color",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "color" | "light";
}) {
  const dims = {
    sm: "size-10",
    md: "size-12",
    lg: "size-20",
    xl: "size-32 sm:size-40",
  }[size];

  return (
    <img
      src={images.logo}
      alt="Shree Rajrajeshwari Juice & Ice Cream Parlour"
      width={512}
      height={512}
      className={cn(
        "shrink-0 object-contain",
        variant === "light" && "drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]",
        dims,
        className,
      )}
    />
  );
}
