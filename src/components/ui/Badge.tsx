import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

/**
 * Small label badge for step indicators and status tags.
 */
export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium uppercase tracking-wide",
        variant === "default" && "bg-forest-100 text-forest-700",
        variant === "outline" && "border border-forest-200 text-forest-600",
        className,
      )}
      {...props}
    />
  );
}
