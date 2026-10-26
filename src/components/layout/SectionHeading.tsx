import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <h2 className="text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
