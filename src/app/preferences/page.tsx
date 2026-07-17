import {
  StepIntro,
  WizardActions,
} from "@/components/layout/WizardActions";
import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { DEFAULT_PREFERENCES_SETTINGS, TEXTBOOK_OPTIONS, WIZARD_STEP_COUNT } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preferences",
};

/**
 * Preferences page — captures textbook and pacing choices.
 *
 * Sprint 1: Static form UI. Pacing algorithm integration arrives later.
 */
export default function PreferencesPage() {
  const defaults = DEFAULT_PREFERENCES_SETTINGS;

  return (
    <PageContainer>
      <PageHeader
        badge={`Step 4 of ${WIZARD_STEP_COUNT}`}
        title="Preferences"
        description="Customize how your pacing plan is generated."
      />

      <StepIntro>
        These preferences help tailor unit sequencing and review time. You can
        refine them after seeing your initial plan.
      </StepIntro>

      <Card elevated>
        <form className="space-y-6" aria-label="Preferences form">
          <FormField
            id="textbook"
            label="Primary textbook"
            hint="Used to align topic sequencing with your materials"
            required
          >
            <Select id="textbook" name="textbook" defaultValue={defaults.textbook} required>
              {TEXTBOOK_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormField>

          <FormField
            id="reviewWeeksBeforeExam"
            label="Review weeks before AP Exam"
            hint="Weeks reserved for exam prep instead of new content"
            required
          >
            <Input
              id="reviewWeeksBeforeExam"
              name="reviewWeeksBeforeExam"
              type="number"
              min={0}
              max={8}
              defaultValue={defaults.reviewWeeksBeforeExam}
              required
            />
          </FormField>

          <FormField
            id="prioritizeLabs"
            label="Lab time"
            hint="Whether to build in dedicated lab periods in the plan"
          >
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-forest-200 p-4">
              <input
                id="prioritizeLabs"
                name="prioritizeLabs"
                type="checkbox"
                defaultChecked={defaults.prioritizeLabs}
                className="h-4 w-4 rounded border-forest-300 text-forest-600 focus:ring-forest-500"
              />
              <span className="text-sm text-forest-800">
                Prioritize lab activities when distributing instructional time
              </span>
            </label>
          </FormField>

          <FormField
            id="additionalNotes"
            label="Additional pacing notes"
            hint="Unit emphasis, co-teaching constraints, or other goals"
          >
            <Textarea
              id="additionalNotes"
              name="additionalNotes"
              placeholder="e.g., Spend extra time on Unit 8 before spring break"
              defaultValue={defaults.additionalNotes}
              rows={4}
            />
          </FormField>
        </form>
      </Card>

      <WizardActions
        backHref="/calendar"
        backLabel="Calendar"
        nextHref="/results"
        nextLabel="View Results"
      />
    </PageContainer>
  );
}
