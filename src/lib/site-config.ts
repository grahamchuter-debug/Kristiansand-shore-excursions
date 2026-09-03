import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Kristiansand Shore Excursions",
  url: "https://kristiansandshoreexcursions.com",
  locale: "en_GB",
  tagline: "Harbour walk, park trails, or beach day from a southern Norway cruise berth",
  defaultDescription:
    "Independent Kristiansand cruise-port planning: harbour and fortress walks, Fiskebrygga fish market, Baneheia and Ravnedalen parks, Bystranda beach days, and published ship schedules for your day ashore.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Kristiansand Shore Excursions",
  shoreExcursionsPath: "/excursions",
  plannerPath: "/one-day-in-kristiansand",
  schedulePath: "/ship-schedule",
  nationalAuthorityUrl: "https://norwayshoreexcursions.com",
  contactEmail: "hello@kristiansandshoreexcursions.com",
  contactEmailVerified: true,
} as const;
