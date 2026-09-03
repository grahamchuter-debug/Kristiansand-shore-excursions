import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const harbourFortressFishMarketExcursion: ExcursionData = {
  slug: "harbour-fortress-fish-market",
  path: "/excursions/harbour-fortress-fish-market",
  title: "Harbour, Fortress & Fish Market Walk",
  headline: "Kristiansand Harbour, Fortress and Fish Market Walk",
  lead: "SEO-focused compact harbour walk covering Fiskebrygga fish market, Christiansholm Fortress, marina, local food atmosphere, and short-port suitability for cruise passengers with limited time ashore.",
  metaTitle: "Kristiansand Harbour, Fortress & Fish Market Walk",
  metaDescription:
    "Kristiansand harbour, fortress and fish market walking tour for cruise passengers. Fiskebrygga, Christiansholm Fortress, marina, local food, and short-port friendly timing.",
  heroImage: siteImages.harbourWalkTour,
  heroImageAlt: imageAlts.harbourWalkCard,
  heroBadge: "Compact harbour walk for short port calls",
  summary: {
    duration: "Approx. 1.5 to 2.5 hours",
    meetingPoint: "Kristiansand cruise terminal or Fiskebrygga area",
    returnReassurance:
      "Shortest featured tour, built for tight return-to-ship schedules",
    bestFor:
      "Very short port calls and guests who want harbour, fortress, and fish market atmosphere in one focused walk",
  },
  snapshotCards: [
    { label: "Duration", value: "Under 2.5 hours typical" },
    { label: "Pace", value: "Easy harbour walking" },
    { label: "Focus", value: "Fish market, fortress, marina" },
    { label: "Best for", value: "Short-port cruise schedules" },
  ],
  gallery: [
    { src: siteImages.fiskebrygga, alt: imageAlts.fiskebrygga },
    { src: siteImages.christiansholmFortress, alt: imageAlts.christiansholmFortress },
    { src: siteImages.harbour, alt: imageAlts.harbour },
    { src: siteImages.kilden, alt: imageAlts.kilden },
  ],
  highlights: [
    "Kristiansand harbour and marina views",
    "Fiskebrygga fish market and local food atmosphere",
    "Christiansholm Fortress exterior and harbour setting",
    "Guest marina and waterfront promenade",
    "Short-port suitability with minimal transfer time",
    "Easy walking pace for all ages",
  ],
  description: [
    "The Harbour, Fortress and Fish Market Walk concentrates Kristiansand's most searched waterfront sights into one efficient shore excursion. This is the tour for cruise passengers asking whether they can see the fish market and fortress on a very short port call. The answer is yes, and this walk shows you how.",
    "Fiskebrygga anchors the route with its canal-side fish market, seafood stalls, and waterfront restaurants that capture southern Norway's coastal dining culture. The atmosphere shifts from working harbour to leisure promenade as you approach Christiansholm Fortress, the well-preserved circular fort that has guarded Kristiansand's eastern entrance since 1672.",
    "The marina and guest harbour sections deliver classic Skagerrak scenery: masts, granite shoreline, and views toward Odderøya peninsula. Local food stops are optional but recommended when time allows, fresh shellfish and market snacks give a taste of Agder's maritime cuisine.",
    "At under two and a half hours, this is the most compact featured tour on the site. It pairs naturally with independent time in the Kvadraturen if your ship stays slightly longer than expected.",
  ],
  included: [
    "Guided harbour, fortress, and fish market walk",
    "Commentary on Kristiansand maritime history",
    "Marina and promenade photo stops",
    "Route optimised for short port calls",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases at Fiskebrygga",
    "Fortress interior admission unless stated",
    "Transport beyond walking route",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Ideal for port calls under three hours. Also works as a focused first activity on longer days.",
    "Disembark immediately on short calls, every minute counts.",
    "Keep 30 to 45 minutes before all aboard even on this compact tour.",
    "Seafood lunch at Fiskebrygga is popular but adds time, plan accordingly.",
  ],
  faqs: [
    {
      question: "Can I see the fish market and fortress on a short Kristiansand port call?",
      answer:
        "Yes. This walk is designed specifically for short-port schedules, covering Fiskebrygga, Christiansholm Fortress, and the marina within roughly two hours.",
    },
    {
      question: "How is this different from the Walking Exploration tour?",
      answer:
        "This tour is shorter and more focused on harbour, fortress, and fish market only. The Walking Exploration adds Bystranda beach and the Otra river on a slightly longer loop.",
    },
    {
      question: "Is the fish market open when cruise ships visit?",
      answer:
        "Fiskebrygga operates year-round with peak activity in summer. Market stalls and restaurants are typically open during standard cruise port hours.",
    },
    {
      question: "Can I buy seafood to take back to the ship?",
      answer:
        "Check your cruise line's policy on bringing food aboard. Many guests enjoy seafood at Fiskebrygga restaurants rather than taking items back to the ship.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Harbour, Fortress & Fish Market Walk" },
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
    { label: "Kristiansand port guide", href: "/kristiansand-port-guide" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the harbour walk notes, then compare other options",
  ctaText:
    "Use these notes for a short-port harbour day, then compare parks and beach options. This site does not sell tickets.",
};
