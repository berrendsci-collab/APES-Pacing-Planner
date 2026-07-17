import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { WIZARD_STEP_COUNT, WIZARD_STEPS } from "@/lib/constants";
import Link from "next/link";

/**
 * Home page — orients teachers and links to each wizard step.
 */
export default function HomePage() {
  return (
    <PageContainer>
      <PageHeader
        title="Plan your APES course pacing"
        description="Answer a few questions about your school calendar, schedule, and teaching preferences. APES Pacing Planner will help you build a customized plan aligned with the College Board Course and Exam Description."
      />

      {/* Hero call-to-action */}
      <section className="mb-10 rounded-2xl border border-forest-200 bg-gradient-to-br from-forest-600 to-forest-800 p-8 text-white shadow-sm">
        <h2 className="text-2xl font-bold">
          Get started in {WIZARD_STEP_COUNT} steps
        </h2>
        <p className="mt-2 max-w-xl text-forest-100">
          Most teachers complete setup in under 10 minutes. You can return and
          adjust your answers at any time.
        </p>
        <Link
          href="/school-information"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-forest-800 transition-colors hover:bg-forest-50"
        >
          Start with School Information &rarr;
        </Link>
      </section>

      {/* Step overview cards */}
      <section aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="sr-only">
          Planner steps
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WIZARD_STEPS.map((step, index) => (
            <Card key={step.href} elevated>
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-wide text-forest-500">
                  Step {index + 1}
                </p>
                <CardTitle>{step.label}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <Link
                href={step.href}
                className="text-sm font-medium text-forest-600 hover:text-forest-800 hover:underline"
              >
                Go to {step.label} &rarr;
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Context for new APES teachers */}
      <section className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>About APES pacing</CardTitle>
            <CardDescription>
              The College Board recommends pacing AP Environmental Science across
              a full academic year with 45-minute class periods meeting five days
              per week. Your school calendar, block schedule, and textbook choice
              all affect how you distribute the nine course units before the AP
              Exam in early May.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
    </PageContainer>
  );
}
