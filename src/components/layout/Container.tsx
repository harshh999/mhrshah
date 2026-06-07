import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-6 sm:px-10", className)}>
      {children}
    </Tag>
  );
}
