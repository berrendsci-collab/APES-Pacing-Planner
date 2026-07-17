import { WizardActions } from "@/components/layout/WizardActions";
import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { WIZARD_STEP_COUNT } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results",
};

/**
 * Results placeholder page — pacing plan output will render here.
 *
 * Sprint 1 intentionally keeps this as a placeholder. Plan generation,
 * unit breakdown, and export features are scoped for later sprints.
 */
export default function ResultsPage() {
  return (
    <PageContainer>
      <PageHeader
        badge={`Step ${WIZARD_STEP_COUNT} of ${WIZARD_STEP_COUNT}`}
        title="Your Pacing Plan"
        description="Your customized APES pacing plan will appear here."
      />

      <Card elevated className="border-dashed">
        <CardHeader>
          <CardTitle>Results coming soon</CardTitle>
          <CardDescription>
            Once you complete the School Information, Schedule, Calendar, and
            Preferences steps, APES Pacing Planner will generate a day-by-day pacing guide
            aligned with the College Board Course and Exam Description.
          </CardDescription>
        </CardHeader>

        <div className="space-y-4 text-sm text-forest-700">
          <p>In a future sprint, this page will include:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Instructional days available before the AP Exam</li>
            <li>Recommended time per unit based on CED weighting</li>
            <li>Calendar view of unit start and end dates</li>
            <li>Export options for your planning documents</li>
          </ul>
        </div>

        {/* Visual placeholder for the future calendar/plan output */}
        <div
          className="mt-6 flex h-48 items-center justify-center rounded-lg bg-sage-100 text-forest-500"
          aria-hidden="true"
        >
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto h-12 w-12 opacity-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <p className="mt-2 text-sm font-medium">Pacing calendar preview</p>
          </div>
        </div>
      </Card>

      <WizardActions
        backHref="/preferences"
        backLabel="Preferences"
        nextHref="/school-information"
        nextLabel="Edit School Information"
      />
    </PageContainer>
  );
}
