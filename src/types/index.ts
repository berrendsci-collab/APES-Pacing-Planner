/**
 * Shared TypeScript types for APES Pacing Planner (Version 1).
 *
 * These types define the data model teachers configure across the wizard.
 * Sprint 1 establishes the shape; later sprints will wire up persistence,
 * calendar logic, and pacing-plan generation.
 */

/** U.S. school calendar boundaries and exam timing */
export interface SchoolInformation {
  schoolName: string;
  state: string;
  /** ISO date string (YYYY-MM-DD) */
  firstDayOfSchool: string;
  /** ISO date string (YYYY-MM-DD) */
  lastDayOfSchool: string;
  /** ISO date string (YYYY-MM-DD) — AP Environmental Science exam */
  apExamDate: string;
}

/** How instructional time is structured during the week */
export type ScheduleType = "traditional" | "block" | "modified-block";

export interface ScheduleSettings {
  scheduleType: ScheduleType;
  /** Minutes per class period (College Board assumes 45) */
  periodLengthMinutes: number;
  /** Instructional days per week (typically 5) */
  daysPerWeek: number;
  /** Optional notes about early release, RTI, etc. */
  notes: string;
}

/** Categories for days when APES does not meet */
export type NonInstructionalDayType =
  | "holiday"
  | "break"
  | "professional-development"
  | "other";

/** A single non-instructional day on the school calendar */
export interface NonInstructionalDay {
  /** ISO date string (YYYY-MM-DD) */
  date: string;
  label: string;
  type: NonInstructionalDayType;
}

/**
 * Instructional calendar configuration.
 * Sprint 1 defines the shape; calendar rendering logic arrives later.
 */
export interface CalendarSettings {
  nonInstructionalDays: NonInstructionalDay[];
  notes: string;
}

/** Teacher preferences that influence pacing recommendations */
export type TextbookOption =
  | "friedland-relyea"
  | "withgott"
  | "other"
  | "none";

export interface PreferencesSettings {
  textbook: TextbookOption;
  /** Weeks reserved for AP exam review before the test */
  reviewWeeksBeforeExam: number;
  /** Whether to prioritize lab time in the generated plan */
  prioritizeLabs: boolean;
  /** Optional free-text for custom pacing goals */
  additionalNotes: string;
}

/** Aggregated planner configuration (V1 scope) */
export interface PlannerConfiguration {
  school: SchoolInformation;
  schedule: ScheduleSettings;
  calendar: CalendarSettings;
  preferences: PreferencesSettings;
}

/** Wizard step identifiers used for navigation and progress tracking */
export type WizardStep =
  | "home"
  | "school-information"
  | "schedule"
  | "calendar"
  | "preferences"
  | "results";

export interface NavItem {
  href: string;
  label: string;
  /** Shorter label for compact progress indicator */
  shortLabel: string;
  step: WizardStep;
  description: string;
}
