import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Consistent max-width wrapper for all page content.
 */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  description?: string;
  /** Optional badge, e.g. step number */
  badge?: string;
  actions?: ReactNode;
}

/**
 * Standard page header with title, description, and optional actions.
 */
export function PageHeader({ title, description, badge, actions }: PageHeaderProps) {
  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        {badge && (
          <span className="mb-2 inline-block rounded-full bg-forest-100 px-3 py-0.5 text-xs font-medium uppercase tracking-wide text-forest-700">
            {badge}
          </span>
        )}
        <h1 className="page-heading">{title}</h1>
        {description && <p className="page-subheading">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </header>
  );
}
