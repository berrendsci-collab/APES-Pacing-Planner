"use client";

import { ProgressBar } from "@/components/ui/ProgressBar";
import { WIZARD_STEPS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import {
  getWizardProgress,
  getWizardStepIndex,
  isWizardRoute,
} from "@/lib/wizard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

/**
 * Modern wizard progress indicator with step circles, connectors, and bar.
 * Hidden on the Home page; visible throughout the configuration flow.
 */
export function WizardProgress() {
  const pathname = usePathname();

  if (!isWizardRoute(pathname)) {
    return null;
  }

  const currentIndex = getWizardStepIndex(pathname);
  const progress = getWizardProgress(pathname);

  return (
    <nav
      aria-label="Setup progress"
      className="border-b border-forest-200 bg-white/90 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        {/* Progress bar summary */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-forest-700">Setup progress</p>
          <p className="text-sm tabular-nums text-forest-500">{progress}%</p>
        </div>
        <ProgressBar value={progress} className="mb-6" />

        {/* Desktop step indicators with connecting lines */}
        <ol className="hidden items-center sm:flex">
          {WIZARD_STEPS.map((step, index) => {
            const isComplete =
              currentIndex !== null && index < currentIndex;
            const isCurrent = currentIndex === index;
            const isUpcoming =
              currentIndex !== null && index > currentIndex;

            return (
              <Fragment key={step.href}>
                <li className="flex shrink-0 flex-col items-center">
                  <Link
                    href={step.href}
                    aria-current={isCurrent ? "step" : undefined}
                    className={cn(
                      "group flex flex-col items-center gap-2 text-center",
                      isUpcoming && "opacity-60",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
                        isComplete &&
                          "border-forest-600 bg-forest-600 text-white",
                        isCurrent &&
                          "border-forest-600 bg-white text-forest-700 ring-4 ring-forest-100",
                        isUpcoming &&
                          "border-forest-200 bg-white text-forest-400 group-hover:border-forest-300",
                      )}
                    >
                      {isComplete ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </span>
                    <span
                      className={cn(
                        "max-w-[5.5rem] text-xs font-medium leading-tight",
                        isCurrent ? "text-forest-800" : "text-forest-600",
                      )}
                    >
                      {step.shortLabel}
                    </span>
                  </Link>
                </li>

                {index < WIZARD_STEPS.length - 1 && (
                  <li
                    className={cn(
                      "mx-2 mb-5 h-0.5 flex-1",
                      isComplete ? "bg-forest-500" : "bg-forest-200",
                    )}
                    aria-hidden="true"
                  />
                )}
              </Fragment>
            );
          })}
        </ol>

        {/* Compact mobile step label */}
        {currentIndex !== null && (
          <p className="text-center text-sm text-forest-600 sm:hidden">
            Step {currentIndex + 1} of {WIZARD_STEPS.length}:{" "}
            <span className="font-medium text-forest-800">
              {WIZARD_STEPS[currentIndex].label}
            </span>
          </p>
        )}
      </div>
    </nav>
  );
}
