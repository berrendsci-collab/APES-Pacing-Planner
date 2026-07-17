import { cn } from "@/lib/cn";
import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

/**
 * Styled multiline input for optional notes fields.
 */
export function Textarea({ className, hasError, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-[96px] w-full resize-y rounded-lg border bg-white px-3 py-2 text-sm text-forest-900",
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
