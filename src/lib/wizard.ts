/**
 * Wizard navigation helpers.
 *
 * Centralizes step ordering and progress calculations so pages and the
 * progress indicator stay in sync.
 */

import { WIZARD_STEPS } from "@/lib/constants";
import type { WizardStep } from "@/types";

/** Lookup a wizard step by its route pathname */
export function getWizardStepFromPath(pathname: string): WizardStep | null {
  const match = WIZARD_STEPS.find((step) =>
    step.href === "/" ? pathname === "/" : pathname.startsWith(step.href),
  );
  return match?.step ?? null;
}

/** Zero-based index of the current step within the wizard (null if not in wizard) */
export function getWizardStepIndex(pathname: string): number | null {
  const index = WIZARD_STEPS.findIndex((step) =>
    step.href === "/" ? pathname === "/" : pathname.startsWith(step.href),
  );
  return index >= 0 ? index : null;
}

/** Progress percentage (0–100) for the wizard progress bar */
export function getWizardProgress(pathname: string): number {
  const index = getWizardStepIndex(pathname);
  if (index === null) return 0;
  return Math.round(((index + 1) / WIZARD_STEPS.length) * 100);
}

/** Whether the pathname is part of the wizard flow (excludes Home) */
export function isWizardRoute(pathname: string): boolean {
  return pathname !== "/";
}

/** Previous and next step links for wizard navigation */
export function getAdjacentWizardSteps(pathname: string): {
  previous: (typeof WIZARD_STEPS)[number] | null;
  next: (typeof WIZARD_STEPS)[number] | null;
  current: (typeof WIZARD_STEPS)[number] | null;
} {
  const index = getWizardStepIndex(pathname);
  if (index === null) {
    return { previous: null, next: WIZARD_STEPS[0] ?? null, current: null };
  }

  return {
    previous: index > 0 ? WIZARD_STEPS[index - 1] : null,
    next: index < WIZARD_STEPS.length - 1 ? WIZARD_STEPS[index + 1] : null,
    current: WIZARD_STEPS[index],
  };
}
