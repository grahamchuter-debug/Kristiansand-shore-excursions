import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const walkingExplorationKristiansandExcursion: ExcursionData = {
  slug: "walking-exploration-kristiansand",
  path: "/excursions/walking-exploration-kristiansand",
  title: "Walking Exploration",
  headline: "Walking Exploration of Kristiansand",
  lead: "Compact walking tour for short port calls and independent cruise passengers: Fiskebrygga fish market, Christiansholm Fortress, waterfront promenade, Bystranda city beach, Otra river, and harbourfront at an easy walking pace.",
  metaTitle: "Walking Exploration of Kristiansand Shore Excursion",
  metaDescription:
    "Plan a Walking Exploration of Kristiansand for cruise passengers: Fiskebrygga fish market, Christiansholm Fortress, Bystranda beach, Otra river, and harbourfront at an easy pace.",
  heroImage: siteImages.walkingTour,
  heroImageAlt: imageAlts.walkingCard,
  heroBadge: "Short-port and independent cruise passenger option",
  summary: {
    duration: "Approx. 2 to 3 hours",
    meetingPoint: "Kristiansand cruise terminal or harbourfront meeting point",
    returnReassurance:
      "Designed for tight port schedules with comfortable return margins",
    bestFor:
      "Short port calls, independent travellers, and guests who prefer easy walking over coach touring",
  },
  snapshotCards: [
    { label: "Pace", value: "Easy walking, minimal inclines" },
    { label: "Distance", value: "Compact harbour and beach loop" },
    { label: "Highlights", value: "Fish market, fortress, beach, river" },
    { label: "Port fit", value: "Ideal for under 4-hour calls" },
  ],
  gallery: [
    { src: siteImages.fiskebrygga, alt: imageAlts.fiskebrygga },
    { src: siteImages.christiansholmFortress, alt: imageAlts.christiansholmFortress },
    { src: siteImages.bystranda, alt: imageAlts.bystranda },
    { src: siteImages.harbour, alt: imageAlts.harbour },
  ],
  highlights: [
    "Fiskebrygga fish market and waterfront restaurants",
    "Christiansholm Fortress on the eastern harbour",
    "Waterfront promenade along the Skagerrak coast",
    "Bystranda city beach in central Kristiansand",
    "Otra river and guest harbour scenery",
    "Easy walking pace suited to all fitness levels",
  ],
  description: [
    "The Walking Exploration of Kristiansand is built for cruise passengers who want maximum harbour atmosphere with minimum complexity. Starting near the cruise terminal, your guide leads a relaxed loop through the landmarks that define Kristiansand's waterfront character.",
    "Fiskebrygga delivers the fish market bustle and canal-side restaurants that make this one of southern Norway's most photogenic harbour walks. From there, the route follows the promenade toward Christiansholm Fortress, the circular 17th-century fortification that guards the eastern harbour entrance.",
    "The walk continues along the strand to Bystranda, Kristiansand's sandy city beach, where shallow water and promenade cafés create a family-friendly atmosphere even on a short port call. Views of the Otra river mouth and guest marina connect the city's river heritage to its maritime present.",
    "Because everything is on foot from the cruise pier, this tour suits the tightest port schedules. It is the default recommendation in our Cruise Smart Planner for calls under three to four hours.",
  ],
  included: [
    "Guided walking tour of Kristiansand harbourfront",
    "Commentary on fortress, fish market, and city history",
    "Flexible pacing for short port calls",
    "Route designed for easy return to cruise berths",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Museum or fortress interior admission unless stated",
    "Transport beyond walking route",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Ideal for port calls of two to four hours. Also suits guests who want a guided introduction before independent exploring.",
    "Wear comfortable walking shoes for harbour cobbles and promenade paths.",
    "Keep 30 to 45 minutes before all aboard even on short calls.",
    "Bring a light layer for sea breezes along the waterfront.",
  ],
  faqs: [
    {
      question: "How long is the Walking Exploration of Kristiansand?",
      answer:
        "Most guided walks run two to three hours including Fiskebrygga, fortress, beach, and harbourfront sections with return to the cruise pier.",
    },
    {
      question: "Is this tour suitable for short port calls?",
      answer:
        "Yes. It is specifically designed for under-four-hour port windows and is the top recommendation in our Cruise Smart Planner for tight schedules.",
    },
    {
      question: "How far is the walk from the cruise terminal?",
      answer:
        "The entire route stays within the harbour and beach area, typically 5 to 15 minutes from most cruise berths at any point on the loop.",
    },
    {
      question: "Can I swim at Bystranda during the tour?",
      answer:
        "On warm summer days, some guests enjoy a quick dip if time allows. Confirm with your guide and watch return-to-ship timing.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Walking Exploration" },
  ],
  relatedLinks: [
    {
      label: "Harbour, Fortress & Fish Market Walk",
      href: "/excursions/harbour-fortress-fish-market",
    },
    {
      label: "Kristiansand Highlights",
      href: "/excursions/kristiansand-highlights",
    },
    { label: "Kristiansand port guide", href: "/kristiansand-port-guide" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the walking exploration notes, then compare other options",
  ctaText:
    "Use these notes for an easy-paced city walk, then compare harbour, park and beach options. This site does not sell tickets.",
};
