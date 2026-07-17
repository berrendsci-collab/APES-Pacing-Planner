import { WizardActions } from "@/components/layout/WizardActions";
import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { DEFAULT_SCHEDULE_SETTINGS, SCHEDULE_TYPE_OPTIONS, WIZARD_STEP_COUNT } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
};

/**
 * Schedule page — captures how instructional time is structured.
 *
 * Sprint 1: Static form UI. Schedule calculations arrive in a later sprint.
 */
export default function SchedulePage() {
  const defaults = DEFAULT_SCHEDULE_SETTINGS;

  return (
    <PageContainer>
      <PageHeader
        badge={`Step 2 of ${WIZARD_STEP_COUNT}`}
        title="Schedule"
        description="Describe how your APES class meets during the week."
      />

<div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-900">
  <p>
    The College Board Course and Exam Description assumes 45-minute periods
    meeting five days per week. Adjust these values to match your school.
  </p>
</div>

      <Card elevated>
        <form className="space-y-6" aria-label="Schedule settings form">
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-forest-800">
              Schedule type
            </legend>
            <div className="grid gap-3">
              {SCHEDULE_TYPE_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-start gap-3 rounded-lg border border-forest-200 p-4 transition-colors has-[:checked]:border-forest-500 has-[:checked]:bg-forest-50"
                >
                  <input
                    type="radio"
                    name="scheduleType"
                    value={option.value}
                    defaultChecked={defaults.scheduleType === option.value}
                    className="mt-1 h-4 w-4 border-forest-300 text-forest-600 focus:ring-forest-500"
                  />
                  <span>
                    <span className="block text-sm font-medium text-forest-900">
                      {option.label}
                    </span>
                    <span className="block text-xs text-forest-600">
                      {option.description}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              id="periodLengthMinutes"
              label="Period length (minutes)"
              hint="College Board default is 45 minutes"
              required
            >
              <Input
                id="periodLengthMinutes"
                name="periodLengthMinutes"
                type="number"
                min={20}
                max={120}
                step={5}
                defaultValue={defaults.periodLengthMinutes}
                required
              />
            </FormField>

            <FormField
              id="daysPerWeek"
              label="Instructional days per week"
              hint="Days your APES class meets"
              required
            >
              <Input
                id="daysPerWeek"
                name="daysPerWeek"
                type="number"
                min={1}
                max={7}
                defaultValue={defaults.daysPerWeek}
                required
              />
            </FormField>
          </div>

          <FormField
            id="scheduleNotes"
            label="Schedule notes"
            hint="Early release days, RTI periods, assembly schedules, etc."
          >
            <Textarea
              id="scheduleNotes"
              name="scheduleNotes"
              placeholder="e.g., 30-minute RTI period every Wednesday"
              defaultValue={defaults.notes}
              rows={3}
            />
          </FormField>
        </form>
      </Card>

      <WizardActions
        backHref="/school-information"
        backLabel="School Information"
        nextHref="/calendar"
        nextLabel="Continue to Calendar"
      />
    </PageContainer>
  );
}
