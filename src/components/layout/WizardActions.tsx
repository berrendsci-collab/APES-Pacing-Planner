import Link from "next/link";
import type { ReactNode } from "react";

interface WizardActionsProps {
  backHref?: string;
  backLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

/**
 * Consistent back/next navigation for wizard-style form pages.
 * Sprint 1 uses static links; later sprints may add validation gates.
 */
export function WizardActions({
  backHref,
  backLabel = "Back",
  nextHref,
  nextLabel = "Continue",
}: WizardActionsProps) {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-forest-100 pt-6 sm:flex-row sm:justify-between">
      <div>
        {backHref && (
          <Link
            href={backHref}
            className="inline-flex items-center justify-center rounded-lg border border-forest-300 bg-white px-4 py-2 text-sm font-medium text-forest-800 transition-colors hover:bg-forest-50"
          >
            &larr; {backLabel}
          </Link>
        )}
      </div>
      <div>
        {nextHref && (
          <Link
            href={nextHref}
            className="inline-flex items-center justify-center rounded-lg bg-forest-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forest-700"
          >
            {nextLabel} &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}

interface StepIntroProps {
  children: ReactNode;
}

/**
 * Informational callout at the top of wizard steps.
 */
export function StepIntro({ children }: StepIntroProps) {
  return (
    <div className="mb-6 rounded-lg border border-forest-200 bg-forest-50 px-4 py-3 text-sm text-forest-700">
      {children}
    </div>
  );
}
