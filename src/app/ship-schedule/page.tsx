import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleMonthCards } from "@/components/ship-schedule-month-cards";
import {
  kristiansandScheduleIntegrity,
  formatScheduleDate,
  getKristiansandMonthSummaries,
  scheduleDisclaimer,
  shipScheduleHubPath,
} from "@/lib/kristiansand-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Kristiansand Cruise Ship Schedule",
  description:
    "Browse Kristiansand cruise ship schedules by month. View arrival times, departure times, and cruise lines visiting Kristiansand, Norway to plan your shore day.",
  path: shipScheduleHubPath,
});

export default function ShipScheduleHubPage() {
  const months = getKristiansandMonthSummaries();
  const firstLabel = kristiansandScheduleIntegrity.firstDate
    ? formatScheduleDate(kristiansandScheduleIntegrity.firstDate)
    : "";
  const lastLabel = kristiansandScheduleIntegrity.lastDate
    ? formatScheduleDate(kristiansandScheduleIntegrity.lastDate)
    : "";

  return (
    <ContentPage
      title="Kristiansand cruise ship schedule"
      lead={`Published calls for Kristiansand from ${firstLabel} to ${lastLabel}. Find your month, check arrival and departure times, then decide between a harbour walk, park trails or a beach day.`}
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath={shipScheduleHubPath}
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule" },
      ]}
      ctaTitle="Plan your Kristiansand port day"
      ctaText="Once you know your hours ashore, compare harbour walks, Baneheia park trails and Bystranda beach time with a clear return buffer."
      ctaHref="/one-day-in-kristiansand"
      ctaButtonLabel="Plan your Kristiansand day"
      relatedLinks={[
        { label: "Kristiansand shore excursions", href: "/excursions" },
        { label: "One day in Kristiansand", href: "/one-day-in-kristiansand" },
        { label: "Port guide", href: "/kristiansand-port-guide" },
        {
          label: "Is Kristiansand worth visiting?",
          href: "/is-kristiansand-worth-visiting",
        },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This local timetable is filtered from the Norway Shore Excursions master
          schedule: {kristiansandScheduleIntegrity.total} Kristiansand calls,{" "}
          {kristiansandScheduleIntegrity.byYear["2026"] ?? 0} in 2026 and{" "}
          {kristiansandScheduleIntegrity.byYear["2027"] ?? 0} in 2027, across{" "}
          {kristiansandScheduleIntegrity.uniqueShips} ships.
        </p>
      </section>

      <section>
        <h2>Browse by month</h2>
        <ShipScheduleMonthCards months={months} />
      </section>

      <section>
        <h2>Why ship times matter in Kristiansand</h2>
        <p>
          A short call usually suits the harbour, fortress and fish market on
          foot. Baneheia and Ravnedalen need a little more time for the climb into
          the parks. Beach and family days are relaxed but still need a return
          buffer. Published duration alone does not prove a longer outing will
          fit.
        </p>
        <p>
          Continue to{" "}
          <Link href="/one-day-in-kristiansand">one day in Kristiansand</Link>,{" "}
          <Link href="/excursions">excursion options</Link>, the{" "}
          <Link href="/kristiansand-port-guide">port guide</Link>, or{" "}
          <Link href="/is-kristiansand-worth-visiting">
            is Kristiansand worth visiting?
          </Link>
          .
        </p>
      </section>
    </ContentPage>
  );
}
