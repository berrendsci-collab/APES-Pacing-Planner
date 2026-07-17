import {
  StepIntro,
  WizardActions,
} from "@/components/layout/WizardActions";
import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { DEFAULT_SCHOOL_INFORMATION, US_STATES, WIZARD_STEP_COUNT } from "@/lib/constants";
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
        <form className="space-y-6" aria-label="School information form">
          <FormField
            id="schoolName"
            label="School name"
            hint="Optional — used for labeling your exported plan"
          >
            <Input
              id="schoolName"
              name="schoolName"
              type="text"
              placeholder="e.g., Lincoln High School"
              defaultValue={defaults.schoolName}
              autoComplete="organization"
            />
          </FormField>

          <FormField id="state" label="State" required>
            <Select id="state" name="state" defaultValue="" required>
              <option value="" disabled>
                Select a state
              </option>
              {US_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </FormField>

          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              id="firstDayOfSchool"
              label="First day of school"
              hint="First day APES meets"
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

            <FormField
              id="lastDayOfSchool"
              label="Last day of school"
              hint="Last day of the academic year"
              required
            >
              <Input
                id="lastDayOfSchool"
                name="lastDayOfSchool"
                type="date"
                defaultValue={defaults.lastDayOfSchool}
                required
              />
            </FormField>
          </div>

          <FormField
            id="apExamDate"
            label="AP Exam date"
            hint="AP Environmental Science is typically administered in early May"
            required
          >
            <Input
              id="apExamDate"
              name="apExamDate"
              type="date"
              defaultValue={defaults.apExamDate}
              required
            />
          </FormField>
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
