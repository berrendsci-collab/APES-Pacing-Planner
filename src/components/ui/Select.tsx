import { cn } from "@/lib/cn";
import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
}

/**
 * Styled select dropdown for planner forms.
 */
export function Select({ className, hasError, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "w-full rounded-lg border bg-white px-3 py-2 text-sm text-forest-900",
        "disabled:cursor-not-allowed disabled:bg-sage-100 disabled:text-forest-500",
        hasError
          ? "border-red-400 focus-visible:ring-red-400"
          : "border-forest-200 focus-visible:border-forest-400",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
