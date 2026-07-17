import {
  StepIntro,
  WizardActions,
} from "@/components/layout/WizardActions";
import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { DEFAULT_SCHOOL_INFORMATION, WIZARD_STEP_COUNT } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Information",
};

/**
 * School Information page — captures calendar boundaries and AP exam date.
 *
 * Sprint 1: Static form UI. Form submission and persistence arrive in a
 * later sprint.
 */
export default function SchoolInformationPage() {
  const defaults = DEFAULT_SCHOOL_INFORMATION;

  return (
    <PageContainer>
      <PageHeader
        badge={`Step 1 of ${WIZARD_STEP_COUNT}`}
        title="School Information"
        description="Tell us about your school calendar so we can calculate available instructional days."
      />

      <StepIntro>
        Enter your school&apos;s start and end dates plus the AP Environmental
        Science exam date. These dates anchor your pacing plan.
      </StepIntro>

      <Card elevated>
        <form className="space-y-8" aria-label="School information form">
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField id="schoolName" label="School Name" required>
              <Input
                id="schoolName"
                name="schoolName"
                type="text"
                placeholder="e.g., Lincoln High School"
                defaultValue={defaults.schoolName}
                autoComplete="organization"
                required
              />
            </FormField>

            <FormField id="teacherName" label="Teacher Name">
              <Input
                id="teacherName"
                name="teacherName"
                type="text"
                placeholder="e.g., Jane Smith"
                autoComplete="name"
              />
            </FormField>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <FormField id="schoolYear" label="School Year" required>
              <Input
                id="schoolYear"
                name="schoolYear"
                type="text"
                placeholder="e.g., 2025–2026"
                required
              />
            </FormField>

            <FormField
              id="firstDayOfSchool"
              label="First Day of School"
              required
            >
              <Input
                id="firstDayOfSchool"
                name="firstDayOfSchool"
                type="date"
                defaultValue={defaults.firstDayOfSchool}
                required
              />
            </FormField>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <FormField id="apExamDate" label="AP Exam Date" required>
              <>
                <Input
                  id="apExamDate"
                  name="apExamDate"
                  type="date"
                  defaultValue={defaults.apExamDate}
                  aria-describedby="apExamDate-hint"
                  required
                />
                <p
                  id="apExamDate-hint"
                  className="mt-1.5 text-xs text-forest-500"
                >
                  The official AP Environmental Science exam date published by
                  the College Board.
                </p>
              </>
            </FormField>

            <FormField
              id="lastInstructionalDayBeforeApExam"
              label="Last Instructional Day Before AP Exam"
              required
            >
              <>
                <Input
                  id="lastInstructionalDayBeforeApExam"
                  name="lastInstructionalDayBeforeApExam"
                  type="date"
                  aria-describedby="lastInstructionalDayBeforeApExam-hint"
                  required
                />
                <p
                  id="lastInstructionalDayBeforeApExam-hint"
                  className="mt-1.5 text-xs text-forest-500"
                >
                  The last day students will receive new APES instruction
                  before beginning review.
                </p>
              </>
            </FormField>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <FormField id="schoolEndDate" label="School End Date">
              <Input
                id="schoolEndDate"
                name="schoolEndDate"
                type="date"
                defaultValue={defaults.lastDayOfSchool}
              />
            </FormField>
          </div>
        </form>
      </Card>

      <WizardActions
        backHref="/"
        backLabel="Home"
        nextHref="/schedule"
        nextLabel="Continue to Schedule"
      />
    </PageContainer>
  );
}
