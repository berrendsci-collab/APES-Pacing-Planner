import MonthCalendar from "@/components/calendar/MonthCalendar";

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
<Card elevated className="mb-6">
  <CardHeader>
    <h2 className="section-heading">School Calendar</h2>
    <p className="text-sm text-forest-600">
      Click dates to mark holidays, breaks, testing days, or other
      non-instructional events.
    </p>
  </CardHeader>

  <div className="mt-4">
  <MonthCalendar month="August 2026" />
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
