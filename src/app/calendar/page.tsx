import {
  StepIntro,
  WizardActions,
} from "@/components/layout/WizardActions";
import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import {
  DEFAULT_CALENDAR_SETTINGS,
  NON_INSTRUCTIONAL_DAY_TYPES,
  WIZARD_STEP_COUNT,
} from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar",
};

/**
 * Calendar page — shell for marking non-instructional days.
 *
 * Sprint 1: Static UI only. Interactive calendar rendering and day
 * management logic arrive in a later sprint.
 */
export default function CalendarPage() {
  const defaults = DEFAULT_CALENDAR_SETTINGS;

  return (
    <PageContainer>
      <PageHeader
        badge={`Step 3 of ${WIZARD_STEP_COUNT}`}
        title="Instructional Calendar"
        description="Mark holidays, breaks, and other days when APES does not meet."
      />

      <StepIntro>
        After you enter your school dates, this calendar will show your
        instructional year. Add non-instructional days so your pacing plan
        reflects actual teaching time.
      </StepIntro>

      {/* Calendar preview placeholder — no rendering logic in Sprint 1 */}
      <Card elevated className="mb-6">
        <CardHeader className="mb-0">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="section-heading">Calendar preview</h2>
              <p className="text-sm text-forest-600">
                Interactive calendar view will appear here once school dates are
                configured.
              </p>
            </div>
            <Badge variant="outline">Coming soon</Badge>
          </div>
        </CardHeader>

        <div
          className="mt-4 flex h-56 items-center justify-center rounded-lg border border-dashed border-forest-200 bg-sage-50"
          aria-hidden="true"
        >
          <div className="text-center text-forest-500">
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
            <p className="mt-2 text-sm font-medium">Year-at-a-glance calendar</p>
          </div>
        </div>
      </Card>

      {/* Add non-instructional day form — static in Sprint 1 */}
      <Card elevated>
        <form className="space-y-6" aria-label="Non-instructional day form">
          <div>
            <h2 className="section-heading">Add non-instructional day</h2>
            <p className="mt-1 text-sm text-forest-600">
              Record holidays, breaks, and professional development days.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <FormField id="dayDate" label="Date" required>
              <Input id="dayDate" name="dayDate" type="date" required />
            </FormField>

            <FormField id="dayType" label="Type" required>
              <Select id="dayType" name="dayType" defaultValue="holiday" required>
                {NON_INSTRUCTIONAL_DAY_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>

          <FormField id="dayLabel" label="Label" hint="e.g., Thanksgiving Break">
            <Input
              id="dayLabel"
              name="dayLabel"
              type="text"
              placeholder="Holiday or event name"
            />
          </FormField>

          <FormField
            id="calendarNotes"
            label="Calendar notes"
            hint="Additional context about your school calendar"
          >
            <Textarea
              id="calendarNotes"
              name="calendarNotes"
              placeholder="e.g., Two-week winter break from Dec 23 – Jan 3"
              defaultValue={defaults.notes}
              rows={3}
            />
          </FormField>

          {/* Empty state for saved days list */}
          <div className="rounded-lg border border-forest-100 bg-sage-50 px-4 py-6 text-center text-sm text-forest-600">
            No non-instructional days added yet. Saved days will appear here in a
            future sprint.
          </div>
        </form>
      </Card>

      <WizardActions
        backHref="/schedule"
        backLabel="Schedule"
        nextHref="/preferences"
        nextLabel="Continue to Preferences"
      />
    </PageContainer>
  );
}
