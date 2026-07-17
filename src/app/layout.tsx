import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import { WizardProgress } from "@/components/layout/WizardProgress";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
};

/**
 * Root layout shared across all pages.
 * Provides header, step navigation, main content area, and footer.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans`}
      >
        <AppHeader />
        <WizardProgress />
        <main className="flex-1">{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
