// ─────────────────────────────────────────────────────────────
//  EUDAIMONIA — Event-Konfiguration
//  Hier alles anpassen für jeden neuen Termin.
// ─────────────────────────────────────────────────────────────

export const event = {
  date: "12.DEZEMBER",
  time: "22:30 UHR",
  venue: "Backstage München · Halle",
  ticketUrl: "https://www.backstage.eu/event/6d9406db-2099-47a4-87df-c9dcbac2774c",
  instagramUrl: "https://www.instagram.com/eudaimonia.de/",
  instagramHandle: "@eudaimonia.de",
  siteUrl: "https://eudaimonia-event.de",
  // ISO date for structured data
  isoDate: "2026-12-12T22:30:00+01:00",
  isoDateEnd: "2026-12-13T06:00:00+01:00",
};

export type Act = {
  time: string;
  name: string;
  origin?: string;
  genre?: string;
  desc: string;
};

// Acts hier eintragen – der "Coming soon"-Platzhalter verschwindet automatisch,
// sobald das Array nicht mehr leer ist.
export const lineup: Act[] = [
  {
    time: "Auftakt",
    name: "Marlon & Fabi",
    origin: "München",
    desc: "Den Auftakt macht das Duo aus München und bringt das Backstage zum Schmelzen.",
  },
  {
    time: "00:15 – 02:15",
    name: "DJ DYNA",
    genre: "Resident",
    desc: "Unser Resident übernimmt den Floor mit dem gewohnten Eudaimonia-Sound: von Ikkimel bis Lady Gaga, fette Beats und natürlich spicy Winter- & Christmas-Remixes.",
  },
  {
    time: "ab 02:15",
    name: "DJ Tamxi",
    genre: "Trance",
    desc: "Bringt euch mit feinster Trance Music durch die Nacht – so dass ihr die Party gar nicht mehr verlassen wollt.",
  },
  {
    time: "",
    name: "Specials",
    genre: "Performances & mehr",
    desc: "Sexy Winter Performances, ein kleines Bühnengeheimnis, Free Shots und viele weitere Specials.",
  },
];
