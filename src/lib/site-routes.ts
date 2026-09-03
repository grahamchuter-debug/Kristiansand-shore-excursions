import {
  getKristiansandMonthSummaries,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/kristiansand-schedules";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/kristiansand-highlights",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/baneheia-ravnedalen-nature-trek",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/walking-exploration-kristiansand",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/harbour-fortress-fish-market",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/family-beach-day",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/kristiansand-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-kristiansand",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-kristiansand-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-kristiansand",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: shipScheduleHubPath,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
] as const;

export function getSiteRoutes() {
  const monthRoutes = getKristiansandMonthSummaries().map((month) => ({
    path: shipScheduleMonthPath(month.slug),
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));
  return [...staticRoutes, ...monthRoutes];
}

export const siteRoutes = staticRoutes;
