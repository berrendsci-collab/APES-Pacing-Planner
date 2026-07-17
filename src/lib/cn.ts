import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names with conflict resolution.
 * Standard utility used across shadcn-style component libraries.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
