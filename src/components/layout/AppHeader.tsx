import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import Link from "next/link";

/**
 * Site header with branding. Navigation lives in AppNav below the header.
 */
export function AppHeader() {
  return (
    <header className="border-b border-forest-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        {/* Leaf icon — simple SVG to avoid external asset dependencies in Sprint 1 */}
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-600 text-white"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M12 2C8.5 2 5.5 4.2 4.2 7.5 2.8 11 3.5 15 6 17.5 8 19.5 10.5 21 12 22c1.5-1 4-2.5 6-4.5 2.5-2.5 3.2-6.5 1.8-10C18.5 4.2 15.5 2 12 2zm0 3c2.2 0 4 1.3 4.8 3.2-.8.3-1.7.5-2.6.5-1.5 0-2.9-.4-4.1-1.1.5-1.4 1.5-2.6 2.9-2.6z" />
          </svg>
        </div>
        <div>
          <Link href="/" className="text-lg font-bold text-forest-900 hover:text-forest-700">
            {APP_NAME}
          </Link>
          <p className="hidden text-xs text-forest-600 sm:block">{APP_DESCRIPTION}</p>
        </div>
      </div>
    </header>
  );
}
