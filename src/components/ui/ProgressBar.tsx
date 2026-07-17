import { cn } from "@/lib/cn";

interface ProgressBarProps {
  /** Completion percentage from 0 to 100 */
  value: number;
  className?: string;
  /** Accessible label for screen readers */
  label?: string;
}

/**
 * Accessible horizontal progress bar used by the wizard stepper.
 */
export function ProgressBar({
  value,
  className,
  label = "Wizard progress",
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full", className)}>
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="h-2 overflow-hidden rounded-full bg-forest-100"
      >
        <div
          className="h-full rounded-full bg-forest-600 transition-all duration-500 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
