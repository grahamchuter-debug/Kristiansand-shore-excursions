import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const familyBeachDayExcursion: ExcursionData = {
  slug: "family-beach-day",
  path: "/excursions/family-beach-day",
  title: "Family & Beach Day",
  headline: "Kristiansand Family and Beach Day",
  lead: "Family-friendly shore excursion with Bystranda city beach, Aquarama area, waterfront promenade, relaxed town time, and activities suitable for children on a southern Norway cruise port day.",
  metaTitle: "Kristiansand Family & Beach Day Shore Excursion",
  metaDescription:
    "Plan a Kristiansand family and beach day for cruise passengers: Bystranda beach, Aquarama area, waterfront promenade, and relaxed town time with children.",
  heroImage: siteImages.familyBeachTour,
  heroImageAlt: imageAlts.familyBeachCard,
  heroBadge: "Family-friendly planning tour for cruise passengers with children",
  summary: {
    duration: "Approx. 3 to 4 hours",
    meetingPoint:
      "Kristiansand cruise terminal or Bystranda beach meeting point",
    returnReassurance:
      "Relaxed pacing with family-friendly return-to-ship timing",
    bestFor:
      "Families with children who want beach time, promenade walks, and low-stress southern Norway sightseeing",
  },
  snapshotCards: [
    { label: "Pace", value: "Relaxed, family-friendly" },
    { label: "Highlights", value: "Bystranda, Aquarama, promenade" },
    { label: "Activity level", value: "Easy, suitable for children" },
    { label: "Season", value: "Best May to August" },
  ],
  gallery: [
    { src: siteImages.bystranda, alt: imageAlts.bystranda },
    { src: siteImages.fiskebrygga, alt: imageAlts.fiskebrygga },
    { src: siteImages.harbour, alt: imageAlts.harbour },
    { src: siteImages.christiansholmFortress, alt: imageAlts.christiansholmFortress },
  ],
  highlights: [
    "Bystranda city beach with shallow, sandy shore",
    "Aquarama swimming and leisure area nearby",
    "Waterfront promenade with cafés and playgrounds",
    "Relaxed town time in the Kvadraturen centre",
    "Optional fish market visit at Fiskebrygga",
    "Pacing designed for families with children",
  ],
  description: [
    "The Family and Beach Day tour recognises that not every Kristiansand port call needs a museum marathon. For families with children, Bystranda city beach delivers the rare combination of a Blue Flag sandy shore right in the city centre, shallow water, and promenade facilities that make a beach day practical on a cruise schedule.",
    "The Aquarama area adjacent to Bystranda adds indoor swimming and leisure options when weather turns, giving families a backup plan without leaving the harbour district. The waterfront promenade connects beach time to gentle sightseeing: fortress views, marina boats, and ice cream stops that keep children engaged.",
    "Your guide paces the day around family needs: bathroom breaks, snack stops, and realistic walking distances. Optional time at Fiskebrygga introduces children to the fish market atmosphere without the pressure of a full cultural tour.",
    "This excursion suits three-to-four-hour port calls and longer. It is the default family recommendation in our Cruise Smart Planner and pairs well with independent playground time if your ship stays six hours or more.",
  ],
  included: [
    "Guided family-friendly tour of Bystranda and harbourfront",
    "Commentary on beach facilities and town amenities",
    "Flexible pacing for children",
    "Route designed for easy return to cruise berths",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Aquarama or swimming pool admission unless stated",
    "Beach equipment rental",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Ideal when you have three to four hours or more ashore. Warm summer days maximise beach enjoyment.",
    "Pack swimwear, towels, and sun protection for Bystranda.",
    "Keep 30 to 45 minutes before all aboard for the return to your gangway.",
    "Check weather forecast, indoor Aquarama options provide backup on cooler days.",
  ],
  faqs: [
    {
      question: "Is Bystranda beach suitable for young children?",
      answer:
        "Yes. Bystranda is a sandy city beach with relatively shallow water and promenade facilities. It is one of Norway's most family-friendly urban beaches.",
    },
    {
      question: "What is the Aquarama area?",
      answer:
        "Aquarama is Kristiansand's indoor swimming and leisure complex near Bystranda. It offers a weather-proof option for families when outdoor beach time is limited.",
    },
    {
      question: "Can we combine the beach day with other tours?",
      answer:
        "On six-hour or longer port calls, some families do a morning highlights tour and afternoon beach time. Use the Cruise Smart Planner to check your margin.",
    },
    {
      question: "Is this tour available outside summer?",
      answer:
        "The tour operates in the cruise season, but beach time is most rewarding May through August. Shoulder-season sailings focus more on promenade walks and town time.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Family & Beach Day" },
  ],
  relatedLinks: [
    {
      label: "Walking Exploration",
      href: "/excursions/walking-exploration-kristiansand",
    },
    {
      label: "Kristiansand Highlights",
      href: "/excursions/kristiansand-highlights",
    },
    { label: "One day in Kristiansand", href: "/one-day-in-kristiansand" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the family beach day notes, then compare other options",
  ctaText:
    "Use these notes for a relaxed Bystranda day, then compare harbour walks and park trails. This site does not sell tickets.",
};
