import { APP_NAME } from "@/lib/constants";

/**
 * Simple site footer with attribution and version note.
 */
export function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-forest-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-forest-600 sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p>
          &copy; {currentYear} {APP_NAME}. Built for AP Environmental Science
          teachers.
        </p>
        <p className="text-xs text-forest-500">Version 1 — Sprint 1</p>
      </div>
    </footer>
  );
}
