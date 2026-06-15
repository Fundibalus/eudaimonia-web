// ─────────────────────────────────────────────────────────────
//  EUDAIMONIA — Event-Konfiguration
//  Hier alles anpassen für jeden neuen Termin.
// ─────────────────────────────────────────────────────────────

export const event = {
  date: "15.AUGUST",
  time: "23 UHR",
  venue: "Nachtwerk Club · München",
  ticketUrl: "https://tickets.nachtwerk-club.de/ticket-client/event/llzsce?mode=ticket",
  instagramUrl: "https://www.instagram.com/eudaimonia.de/",
  instagramHandle: "@eudaimonia.de",
  siteUrl: "https://eudaimonia-event.de",
  // ISO date for structured data
  isoDate: "2026-08-15T23:00:00+02:00",
  isoDateEnd: "2026-08-16T06:00:00+02:00",
};

export type Act = {
  time: string;
  name: string;
  origin?: string;
  genre?: string;
  desc: string;
};

export const lineup: Act[] = [
  {
    time: "23:00",
    name: "DJ DYNA",
    genre: "DANCEPOP · TRANCE",
    desc: "DJ DYNA eröffnet den Abend mit DancePop-Hits — Vicky, Zara Larsson, Lady Gaga, Tate McRae, Shakira bis ROSALÍA. Direkt auf den Floor, von Sekunde eins.",
  },
  {
    time: "~01:00",
    name: "Dragshow & Hosting",
    origin: "@itsabarbieq",
    desc: "Dragshow und Hosting von @itsabarbieq – glamourös, frech, unverschämt unterhaltsam. Die Bühne gehört der Diva.",
  },
  {
    time: "02:30",
    name: "SONALIE SOLAR",
    origin: "Munich",
    genre: "SEXY LATIN TECHNO",
    desc: "Sexy Latin Techno – heiße Rhythmen, treibende Beats. Sonalie Solar bringt München zum Beben.",
  },
];
