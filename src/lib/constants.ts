/**
 * Application-wide constants for APES Pacing Planner.
 */

import type { NavItem } from "@/types";

export const APP_NAME = "APES Pacing Planner";

export const APP_DESCRIPTION =
  "Build a customized pacing plan for your AP Environmental Science course.";

/** Total wizard steps (excludes Home) */
export const WIZARD_STEP_COUNT = 5;

/**
 * Ordered wizard steps shown in the progress indicator.
 * Home is intentionally excluded — it sits outside the setup flow.
 */
export const WIZARD_STEPS: NavItem[] = [
  {
    href: "/school-information",
    label: "School Information",
    shortLabel: "School",
    step: "school-information",
    description: "Calendar dates and exam timing",
  },
  {
    href: "/schedule",
    label: "Schedule",
    shortLabel: "Schedule",
    step: "schedule",
    description: "Class period structure",
  },
  {
    href: "/calendar",
    label: "Calendar",
    shortLabel: "Calendar",
    step: "calendar",
    description: "Holidays and non-instructional days",
  },
  {
    href: "/preferences",
    label: "Preferences",
    shortLabel: "Preferences",
    step: "preferences",
    description: "Textbook and pacing choices",
  },
  {
    href: "/results",
    label: "Results",
    shortLabel: "Results",
    step: "results",
    description: "Your generated pacing plan",
  },
];

/** All navigable pages including Home */
export const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    label: "Home",
    shortLabel: "Home",
    step: "home",
    description: "Overview and getting started",
  },
  ...WIZARD_STEPS,
];

/** Default values for form fields — aligned with College Board guidance */
export const DEFAULT_SCHOOL_INFORMATION = {
  schoolName: "",
  state: "",
  firstDayOfSchool: "",
  lastDayOfSchool: "",
  apExamDate: "",
} as const;

export const DEFAULT_SCHEDULE_SETTINGS = {
  scheduleType: "traditional" as const,
  periodLengthMinutes: 45,
  daysPerWeek: 5,
  notes: "",
} as const;

export const DEFAULT_CALENDAR_SETTINGS = {
  nonInstructionalDays: [] as const,
  notes: "",
} as const;

export const DEFAULT_PREFERENCES_SETTINGS = {
  textbook: "friedland-relyea" as const,
  reviewWeeksBeforeExam: 2,
  prioritizeLabs: true,
  additionalNotes: "",
} as const;

/** U.S. states for the school information form */
export const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
] as const;

export const SCHEDULE_TYPE_OPTIONS = [
  {
    value: "traditional",
    label: "Traditional",
    description: "Daily 45-minute periods, five days per week",
  },
  {
    value: "block",
    label: "Block",
    description: "Longer periods on alternating days",
  },
  {
    value: "modified-block",
    label: "Modified Block",
    description: "Mix of traditional and block scheduling",
  },
] as const;

export const NON_INSTRUCTIONAL_DAY_TYPES = [
  { value: "holiday", label: "Holiday" },
  { value: "break", label: "School break" },
  { value: "professional-development", label: "Professional development" },
  { value: "other", label: "Other" },
] as const;

export const TEXTBOOK_OPTIONS = [
  {
    value: "friedland-relyea",
    label: "Environmental Science for the AP Course (Friedland & Relyea)",
  },
  {
    value: "withgott",
    label: "Environment: The Science Behind the Stories (Withgott)",
  },
  { value: "other", label: "Other textbook" },
  { value: "none", label: "No primary textbook" },
] as const;
