import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

/**
 * Styled text/number/date input for planner forms.
 */
export function Input({ className, hasError, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-lg border bg-white px-3 py-2 text-sm text-forest-900",
        "placeholder:text-forest-400",
        "disabled:cursor-not-allowed disabled:bg-sage-100 disabled:text-forest-500",
        hasError
          ? "border-red-400 focus-visible:ring-red-400"
          : "border-forest-200 focus-visible:border-forest-400",
        className,
      )}
      {...props}
    />
  );
}
