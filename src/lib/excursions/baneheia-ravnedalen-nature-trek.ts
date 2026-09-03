import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const baneheiaRavnedalenNatureTrekExcursion: ExcursionData = {
  slug: "baneheia-ravnedalen-nature-trek",
  path: "/excursions/baneheia-ravnedalen-nature-trek",
  title: "Baneheia & Ravnedalen Trek",
  headline: "Baneheia and Ravnedalen Nature Trek",
  lead: "Kristiansand's nature-focused headline tour through Baneheia forest and Ravnedalen valley with woodland trails, lakes, viewpoints, and coastal-and-woodland scenery at a moderate activity level.",
  metaTitle: "Baneheia & Ravnedalen Nature Trek Shore Excursion",
  metaDescription:
    "Plan the Baneheia and Ravnedalen nature trek from Kristiansand cruise port: forest trails, lakes, viewpoints, and moderate hiking with return-to-ship friendly timing.",
  heroImage: siteImages.natureTrekTour,
  heroImageAlt: imageAlts.natureTrekCard,
  heroBadge: "Nature-focused headline tour for active cruise passengers",
  summary: {
    duration: "Approx. 4 to 5 hours",
    meetingPoint:
      "Central Kristiansand near cruise berths or designated trailhead pickup",
    returnReassurance:
      "Paced for typical port calls with buffer before all aboard",
    bestFor:
      "Active guests who want forest trails, lakes, and viewpoints above Kristiansand rather than harbour-only sightseeing",
  },
  snapshotCards: [
    { label: "Activity level", value: "Moderate hiking on forest trails" },
    { label: "Terrain", value: "Woodland paths, lakes, viewpoints" },
    { label: "Highlights", value: "Baneheia, Ravnedalen, coastal views" },
    { label: "Season", value: "Best May to September" },
  ],
  gallery: [
    { src: siteImages.baneheia, alt: imageAlts.baneheia },
    { src: siteImages.ravnedalen, alt: imageAlts.ravnedalen },
    { src: siteImages.harbour, alt: imageAlts.harbour },
    { src: siteImages.bystranda, alt: imageAlts.bystranda },
  ],
  highlights: [
    "Baneheia forest trails and granite viewpoints above the city",
    "Ravnedalen valley park with woodland paths and lakes",
    "Coastal and woodland scenery unique to southern Norway",
    "Moderate activity level suited to active cruise passengers",
    "Guided pacing with return-to-ship timing built in",
    "Photography stops at signature forest and lake viewpoints",
  ],
  description: [
    "The Baneheia and Ravnedalen Nature Trek is Kristiansand's answer to guests who want green space and fresh air rather than harbour-only touring. Baneheia rises above the city centre with a network of forest trails, granite outcrops, and viewpoints that look out over the Skagerrak coast and inland woodland.",
    "Ravnedalen valley park adds a softer landscape of tree-lined paths, small lakes, and sheltered glades that feel worlds away from the cruise pier yet sit minutes from town. Your guide sets a steady pace suited to moderate fitness, with rest stops at viewpoints where southern Norway's mix of coastal light and forest shade creates memorable photography.",
    "This tour suits guests who enjoy walking holidays and want something distinctly different from Norway's fjord ports. The activity level is moderate: expect uneven paths, some inclines, and around four to five hours including transfers and trail time.",
    "Because trail touring needs a meaningful port window, this excursion fits four-to-six-hour calls and longer. It is the anchor active recommendation in our Cruise Smart Planner for guests with enough hours ashore.",
  ],
  included: [
    "Guided trek through Baneheia and Ravnedalen",
    "Trail commentary on local nature and history",
    "Viewpoint and lake photo stops",
    "Route paced for typical cruise port timings",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Hiking poles unless provided by operator",
    "Optional extended trail sections beyond itinerary",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Ideal when you have at least four to six hours ashore. Not recommended for port calls under four hours.",
    "Wear sturdy walking shoes with good grip. Trails can be damp even in summer.",
    "Keep 30 to 45 minutes before all aboard for the return to your gangway.",
    "Pack a waterproof layer and water bottle for trail comfort.",
  ],
  faqs: [
    {
      question: "How difficult is the Baneheia and Ravnedalen trek?",
      answer:
        "Moderate. Expect forest paths with some inclines and uneven surfaces. Suitable for reasonably fit guests who enjoy walking. Not ideal for limited mobility without advance arrangement.",
    },
    {
      question: "How long is the nature trek from Kristiansand cruise port?",
      answer:
        "Most operators run four to five hours including transfers, trail time, and return to cruise berths.",
    },
    {
      question: "Can I do this tour on a short port call?",
      answer:
        "Only if you have at least four hours ashore. Under four hours, choose the Walking Exploration or Harbour Walk instead.",
    },
    {
      question: "What should I wear for Baneheia and Ravnedalen?",
      answer:
        "Sturdy walking shoes, breathable layers, and a light rain jacket. Forest trails can be cooler and damper than the harbourfront.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Baneheia & Ravnedalen Trek" },
  ],
  relatedLinks: [
    {
      label: "Kristiansand Highlights",
      href: "/excursions/kristiansand-highlights",
    },
    {
      label: "Family & Beach Day",
      href: "/excursions/family-beach-day",
    },
    { label: "One day in Kristiansand", href: "/one-day-in-kristiansand" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the nature trek notes, then compare other Kristiansand options",
  ctaText:
    "Use these notes for Baneheia and Ravnedalen timing, then compare harbour walks and beach days. This site does not sell tickets.",
};
