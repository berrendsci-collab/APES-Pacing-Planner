import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  /** Optional helper text shown below the label */
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Accessible form field wrapper with label, hint, and error messaging.
 */
export function FormField({
  id,
  label,
  hint,
  error,
  required,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-forest-800">
        {label}
        {required && (
          <span className="ml-1 text-forest-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="text-xs text-forest-500">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
