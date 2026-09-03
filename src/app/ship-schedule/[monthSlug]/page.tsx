import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleTable } from "@/components/ship-schedule-table";
import {
  formatMonthLabel,
  getKristiansandEntriesForMonthKey,
  getKristiansandMonthKeysWithCalls,
  getKristiansandMonthSummaries,
  monthKeyToSlug,
  monthSlugToKey,
  scheduleDisclaimer,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/kristiansand-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

type MonthPageProps = {
  params: Promise<{ monthSlug: string }>;
};

export function generateStaticParams() {
  return getKristiansandMonthKeysWithCalls().map((monthKey) => ({
    monthSlug: monthKeyToSlug(monthKey),
  }));
}

export async function generateMetadata({
  params,
}: MonthPageProps): Promise<Metadata> {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) return {};
  const label = formatMonthLabel(monthKey);
  return buildPageMetadata({
    title: `Kristiansand Cruise Ship Schedule ${label}`,
    description: `View the Kristiansand cruise ship schedule for ${label} including arrival times, departure times, and cruise lines visiting Kristiansand, Norway.`,
    path: shipScheduleMonthPath(monthSlug),
  });
}

export default async function KristiansandShipScheduleMonthPage({
  params,
}: MonthPageProps) {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) notFound();

  const entries = getKristiansandEntriesForMonthKey(monthKey);
  if (entries.length === 0) notFound();

  const label = formatMonthLabel(monthKey);
  const otherMonths = getKristiansandMonthSummaries().filter(
    (m) => m.slug !== monthSlug,
  );

  return (
    <ContentPage
      title={`Kristiansand cruise schedule: ${label}`}
      lead={`${entries.length} published ship call${entries.length === 1 ? "" : "s"} for ${label}. Find your vessel, note arrival and departure, then choose a realistic Kristiansand plan.`}
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath={shipScheduleMonthPath(monthSlug)}
      pageDescription={`Kristiansand cruise ship schedule for ${label}.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule", href: shipScheduleHubPath },
        { label },
      ]}
      ctaTitle="Plan your Kristiansand port day"
      ctaText="Use your hours ashore to choose between a harbour walk, park trails or beach time, with a clear return buffer."
      ctaHref="/one-day-in-kristiansand"
      ctaButtonLabel="Plan your Kristiansand day"
      relatedLinks={[
        { label: "All months", href: shipScheduleHubPath },
        { label: "Explore excursions", href: "/excursions" },
        { label: "Port guide", href: "/kristiansand-port-guide" },
        { label: "One day in Kristiansand", href: "/one-day-in-kristiansand" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
      </section>

      <section>
        <h2>{label} ship calls</h2>
        <ShipScheduleTable entries={entries} />
      </section>

      <section>
        <h2>Next: turn your date into a plan</h2>
        <p>
          Once you know roughly how long you have ashore, choose one main
          experience that fits. Ship times alone cannot prove that a park trek
          and a beach stop will both work on every call.
        </p>
        <ul>
          <li>
            <Link href="/one-day-in-kristiansand">One day in Kristiansand</Link>
          </li>
          <li>
            <Link href="/excursions">Kristiansand shore excursions</Link>
          </li>
          <li>
            <Link href="/kristiansand-port-guide">
              Kristiansand cruise port guide
            </Link>
          </li>
          <li>
            <Link href="/is-kristiansand-worth-visiting">
              Is Kristiansand worth visiting?
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Other Kristiansand months</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {otherMonths.map((month) => (
            <li key={month.slug}>
              <Link href={shipScheduleMonthPath(month.slug)}>
                {month.label} · {month.callCount} calls
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
