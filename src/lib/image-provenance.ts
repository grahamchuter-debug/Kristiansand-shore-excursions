/**
 * Image provenance registry for Kristiansand Shore Excursions.
 * NEW IMAGE SOURCING IS NOT AUTHORISED without verified rights.
 */

export type ImageProvenance = {
  key: string;
  urlOrPath: string;
  status:
    | "KEEP"
    | "REPLACE"
    | "WRONG_LOCATION"
    | "DUPLICATE"
    | "PROVENANCE_UNKNOWN"
    | "BROKEN";
  notes: string;
};

export const kristiansandImageProvenance: readonly ImageProvenance[] = [
  {
    key: "hero",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Kristiansand_harbour.jpg/1280px-Kristiansand_harbour.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Kristiansand harbour. Rights later-hardening.",
  },
  {
    key: "harbour",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Kristiansand_harbour.jpg/1280px-Kristiansand_harbour.jpg",
    status: "KEEP",
    notes: "Same verified Kristiansand harbour asset as hero.",
  },
  {
    key: "fiskebrygga",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Fiskebrygga%2C_Kristiansand.jpg/1280px-Fiskebrygga%2C_Kristiansand.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Fiskebrygga fish market, Kristiansand.",
  },
  {
    key: "christiansholmFortress",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Christiansholm_festning_02.jpg/1280px-Christiansholm_festning_02.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Christiansholm Fortress, Kristiansand.",
  },
  {
    key: "bystranda",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bystranda_2014-07-21.JPG/1280px-Bystranda_2014-07-21.JPG",
    status: "KEEP",
    notes: "Wikimedia Commons. Bystranda city beach, Kristiansand.",
  },
  {
    key: "baneheia",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Baneheia_Kjempesteinen.JPG/1280px-Baneheia_Kjempesteinen.JPG",
    status: "KEEP",
    notes: "Wikimedia Commons. Baneheia park above Kristiansand.",
  },
  {
    key: "ravnedalen",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ravnedalen.jpg/1280px-Ravnedalen.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Ravnedalen valley park near Kristiansand.",
  },
  {
    key: "kilden",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kristiansand_Kilden_teater_og_konserthus.jpg/1280px-Kristiansand_Kilden_teater_og_konserthus.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Kilden Performing Arts Centre, Kristiansand.",
  },
  {
    key: "domkirke",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Kristiansand_domkirke.jpg/1280px-Kristiansand_domkirke.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Kristiansand Domkirke.",
  },
  {
    key: "sisterPortCards",
    urlOrPath:
      "src/lib/site-images.ts flam/bergen/stavanger related-port cards",
    status: "KEEP",
    notes:
      "Related-port assets in explore-norwegian-ports. Not labelled as Kristiansand local.",
  },
] as const;
