import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const kristiansandHighlightsExcursion: ExcursionData = {
  slug: "kristiansand-highlights",
  path: "/excursions/kristiansand-highlights",
  title: "Kristiansand Highlights",
  headline: "Kristiansand Highlights Shore Excursion",
  lead: "Kristiansand's main city-and-culture tour covering Vest-Agder Cultural Heritage Museum, Høllen coastal village, Domkirke, Fiskebrygga fish market, Christiansholm Fortress, Kilden Performing Arts Centre, and harbour views for first-time visitors.",
  metaTitle: "Kristiansand Highlights Shore Excursion for Cruise Passengers",
  metaDescription:
    "Plan the Kristiansand Highlights shore day for cruise passengers: cultural museum, Høllen village, Domkirke, Fiskebrygga fish market, Christiansholm Fortress, Kilden, and harbour views.",
  heroImage: siteImages.highlightsTour,
  heroImageAlt: imageAlts.highlightsCard,
  heroBadge: "Main city-and-culture tour for first-time visitors",
  summary: {
    duration: "Approx. 3.5 to 4 hours",
    meetingPoint:
      "Central Kristiansand near cruise berths, harbour, or designated coach pickup",
    returnReassurance:
      "Timed for typical Kristiansand port calls with buffer before all aboard",
    bestFor:
      "First-time visitors who want harbour culture, coastal village scenery, and southern Norway city highlights in one efficient tour",
  },
  snapshotCards: [
    { label: "Pace", value: "Coach and walking with photo stops" },
    { label: "Fitness level", value: "Easy to moderate" },
    { label: "Highlights", value: "Museum, Høllen, fortress, fish market" },
    { label: "Season", value: "Popular May to September" },
  ],
  gallery: [
    { src: siteImages.harbour, alt: imageAlts.harbour },
    { src: siteImages.fiskebrygga, alt: imageAlts.fiskebrygga },
    { src: siteImages.christiansholmFortress, alt: imageAlts.christiansholmFortress },
    { src: siteImages.kilden, alt: imageAlts.kilden },
  ],
  highlights: [
    "Vest-Agder Cultural Heritage Museum and regional history",
    "Høllen coastal village scenery south of Kristiansand",
    "Kristiansand Domkirke in the Kvadraturen grid",
    "Fiskebrygga fish market and harbour atmosphere",
    "Christiansholm Fortress on the eastern harbour",
    "Kilden Performing Arts Centre and marina views",
    "Return-to-ship friendly pacing for typical port calls",
  ],
  description: [
    "The Kristiansand Highlights tour is the essential introduction for cruise passengers who want southern Norway's coastal city character in one outing. Your guide connects Kristiansand's harbour heritage to the landmarks that define a first visit: the fish market bustle at Fiskebrygga, the 17th-century walls of Christiansholm Fortress, and the striking Kilden Performing Arts Centre overlooking the marina.",
    "The route includes Kristiansand Domkirke at the heart of the Kvadraturen, the renaissance grid laid out by King Christian IV. A stop at the Vest-Agder Cultural Heritage Museum adds context on Agder's maritime and rural history, while the drive toward Høllen delivers classic southern Norway coastal village scenery with wooden boathouses and sheltered inlets.",
    "Commentary weaves together fortress history, fishing traditions, and how Kristiansand grew as a regional trading port on the Skagerrak coast. Photo stops at harbour viewpoints are built into the itinerary so you capture the city without rushing past signature scenes.",
    "Because this tour combines coach travel with walking sections, it suits three-to-four-hour port calls and longer. It is the anchor recommendation in our Cruise Smart Planner for guests who want the definitive Kristiansand experience on their first visit.",
  ],
  included: [
    "Guided highlights tour of Kristiansand city and harbour",
    "Coastal village drive toward Høllen with photo stops",
    "Walking time at Fiskebrygga, fortress, and Kilden area",
    "Commentary on local history and return-to-ship timing",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Museum admission unless stated by operator",
    "Optional extended stops beyond published itinerary",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Ideal when you have at least three to four hours ashore. With six or more hours, pair with Baneheia and Ravnedalen or relaxed harbour time.",
    "Disembark promptly on busy turnaround days, highlights departures fill when multiple ships share the port.",
    "Keep 30 to 45 minutes before all aboard for the return to your gangway.",
    "Pack comfortable walking shoes and a light layer for harbour breezes.",
  ],
  faqs: [
    {
      question: "How long is the Kristiansand Highlights tour?",
      answer:
        "Most operators run three and a half to four hours including driving, Høllen village time, and harbour walking stops with return to cruise berths.",
    },
    {
      question: "Is this the best Kristiansand excursion for first-time visitors?",
      answer:
        "Yes. It combines the region's signature harbour landmarks with coastal village scenery, the top recommendation in our Cruise Smart Planner for most port lengths of three hours or more.",
    },
    {
      question: "Does the tour include Fiskebrygga fish market?",
      answer:
        "Yes. Fiskebrygga is a core stop where you experience Kristiansand's fish market atmosphere, waterfront restaurants, and harbour views.",
    },
    {
      question: "Can I combine this tour with Baneheia on the same day?",
      answer:
        "Only on very long port calls of six hours or more. Most guests choose either the highlights tour or the nature trek. Use the Cruise Smart Planner to check your margin.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Kristiansand Highlights" },
  ],
  relatedLinks: [
    {
      label: "Baneheia & Ravnedalen Nature Trek",
      href: "/excursions/baneheia-ravnedalen-nature-trek",
    },
    {
      label: "Walking Exploration",
      href: "/excursions/walking-exploration-kristiansand",
    },
    { label: "One day in Kristiansand", href: "/one-day-in-kristiansand" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the Highlights notes, then compare other Kristiansand options",
  ctaText:
    "Use these notes to understand fit and timing for the city-and-culture day, then compare harbour walks, parks and beach options. This site does not sell tickets.",
};
