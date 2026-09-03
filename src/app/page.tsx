import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TourCard } from "@/components/tour-card";
import {
  kristiansandScheduleIntegrity,
  formatScheduleDate,
} from "@/lib/kristiansand-schedules";
import {
  kristiansandTourCards,
  kristiansandTourListItems,
} from "@/lib/kristiansand-tours";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";

const pageMeta = {
  title:
    "Kristiansand Shore Excursions | Harbour Walks, Parks & Beach Days for Cruise Passengers",
  description:
    "Plan your Kristiansand cruise port day: harbour and fortress walks, Fiskebrygga fish market, Baneheia parks, Bystranda beach time, published ship schedules, and return-to-ship friendly planning.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const homeFaqs = [
  {
    question: "Is this site for cruise passengers calling at Kristiansand?",
    answer:
      "Yes. This is an independent Kristiansand cruise-port planning site. It helps you choose between a harbour walk, park trails or a beach day, check published ship calls, and leave a return buffer. Confirm final timings with your cruise line.",
  },
  {
    question: "Should I stay on the harbour, walk the parks, or head to the beach?",
    answer:
      "Harbour and fortress walks suit short calls when the pier is close. Baneheia and Ravnedalen need a little more time for trails above town. Bystranda beach days suit families who want a relaxed southern Norway shore stop. Pick one main direction unless timing is already locked in.",
  },
  {
    question: "Can I do the parks and the beach because my ship stays all day?",
    answer:
      "Published hours ashore are not enough. Combining them needs confirmed pacing and a clear return margin. This site does not invent current park or beach facilities.",
  },
  {
    question: "Can I book shore excursions on this site?",
    answer:
      "This site is for planning and discovery. There is no live booking checkout here. Use the excursion pages and guides to understand options, then arrange tours through operators or your usual booking channel.",
  },
] as const;

export default function Home() {
  const firstLabel = kristiansandScheduleIntegrity.firstDate
    ? formatScheduleDate(kristiansandScheduleIntegrity.firstDate)
    : "";
  const lastLabel = kristiansandScheduleIntegrity.lastDate
    ? formatScheduleDate(kristiansandScheduleIntegrity.lastDate)
    : "";
  const featured = kristiansandTourCards.slice(0, 3);
  const remaining = kristiansandTourCards.slice(3);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(kristiansandTourListItems),
          buildFaqSchema(homeFaqs),
        ]}
      />
      <main>
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <p className="hero-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
            {siteConfig.name}
          </p>
          <h1 className="mb-5 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Your ship is in Kristiansand. Harbour walk, park trails, or beach
            day?
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Southern Norway&apos;s coastal city: Fiskebrygga and Christiansholm
            near the pier, Baneheia parks above town, Bystranda sand when the
            family wants an easy shore stop. Choose one main direction, then keep
            time to get back.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/excursions"
              className="btn-primary w-full justify-center sm:w-auto"
            >
              Explore Kristiansand excursions
            </Link>
            <Link
              href="/ship-schedule"
              className="btn-secondary w-full justify-center sm:w-auto"
            >
              Check your ship schedule
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Three Kristiansand days</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              City harbour, nature parks, or beach and family time
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              The inventory on this site already splits that way. Use the one-day
              guide for hours, not as proof that parks and beach will combine on
              the same call.
            </p>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  City and harbour
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Fish market, fortress and waterfront when you want the walkable
                  city itself. Compact berths make this the default on shorter
                  calls.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/excursions/harbour-fortress-fish-market"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Harbour, fortress and fish market
                  </Link>
                  <Link
                    href="/excursions/walking-exploration-kristiansand"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Walking exploration
                  </Link>
                  <Link
                    href="/excursions/kristiansand-highlights"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Kristiansand Highlights
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Nature and parks
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Baneheia and Ravnedalen trails above town when you want forest,
                  lakes and viewpoints without leaving the city edge.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/excursions/baneheia-ravnedalen-nature-trek"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Baneheia and Ravnedalen nature trek
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Beach and family
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Bystranda sand and the Aquarama area when the day is about
                  relaxed pacing with children, not packing stops.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/excursions/family-beach-day"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Family and beach day
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Find your ship</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Check when your ship is in Kristiansand
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {kristiansandScheduleIntegrity.total} published Kristiansand calls
              from {firstLabel} to {lastLabel}. Arrival and departure times shape
              what is realistic ashore. Always confirm with your cruise line.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ship-schedule" className="btn-outline-dark">
                Open Kristiansand ship schedule
              </Link>
              <Link
                href="/one-day-in-kristiansand"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
              >
                Then plan your hours
              </Link>
            </div>
          </div>
        </section>

        <section id="tours" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Excursion options</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Experiences already on this site
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Five products. No invented prices. Durations are approximate. Keep
              a return buffer. This site does not sell tickets.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featured.map((tour) => (
                <TourCard key={tour.href} {...tour} />
              ))}
            </div>
            {remaining.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {remaining.map((tour) => (
                  <TourCard key={tour.href} {...tour} />
                ))}
              </div>
            ) : null}
            <p className="mt-8">
              <Link
                href="/excursions"
                className="text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
              >
                Compare all Kristiansand excursions
              </Link>
            </p>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">City, parks and beach</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Stacking stops is a stretch, not a timetable result
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Harbour highlights plus Baneheia, or a beach stop after a city walk,
              needs a long confirmed day. Ship duration alone cannot prove it.
              Confirm each outing separately and leave buffer before all aboard.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">First time in Kristiansand</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Useful planning guides
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  href: "/kristiansand-port-guide",
                  title: "Cruise port guide",
                  text: "Pier layout toward Fiskebrygga, fortress and Bystranda.",
                },
                {
                  href: "/one-day-in-kristiansand",
                  title: "One day in Kristiansand",
                  text: "Sample shapes for short, classic and longer port calls.",
                },
                {
                  href: "/is-kristiansand-worth-visiting",
                  title: "Is Kristiansand worth visiting?",
                  text: "Honest context if you are deciding how to spend hours ashore.",
                },
                {
                  href: "/best-time-to-visit-kristiansand",
                  title: "Best time to visit",
                  text: "Seasonal notes for southern Norway cruise calls.",
                },
              ].map((item) => (
                <li
                  key={item.href}
                  className="border-t border-[var(--border-light)] pt-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    <Link
                      href={item.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="planner"
          className="scroll-mt-24 border-y border-[var(--border-light)] bg-surface-muted py-14 sm:py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Port-day planning</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Think in hours, harbour distance and return buffer
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Use published times as a planning start. This Cruise Smart Planner
              helps you think through the day. It does not invent park trail
              conditions or beach facilities.
            </p>
            <div className="mt-8">
              <CruisePortDayPlanner />
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Norway beyond Kristiansand</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Planning other Norwegian ports?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              For multi-port itineraries, the national planning site covers the
              wider Norway cruise picture.
            </p>
            <a
              href={siteConfig.nationalAuthorityUrl}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
            >
              Norway Shore Excursions
            </a>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Kristiansand cruise questions
            </h2>
            <dl className="mt-8 space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-navy py-14 text-white sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Kristiansand planning concierge
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              {siteConfig.contactEmailVerified
                ? `Questions about shaping a Kristiansand port day? Email ${siteConfig.contactEmail}.`
                : "A destination email is being prepared. Until then, use the schedule, one-day guide and excursion pages on this site."}
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Contact
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
