import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Slightly elevated appearance for primary content areas */
  elevated?: boolean;
}

/**
 * Container card for grouping related form sections or content blocks.
 */
export function Card({ className, elevated = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-forest-200 bg-white p-6",
        elevated && "shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn("mb-4 space-y-1", className)} {...props} />;
}

type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h2 className={cn("section-heading", className)} {...props} />
  );
}

type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-forest-600", className)} {...props} />
  );
}
