// ─────────────────────────────────────────────────────────────
//  EUDAIMONIA — Event-Konfiguration
//  Hier alles anpassen für jeden neuen Termin.
// ─────────────────────────────────────────────────────────────

export const event = {
  date: "02.MAI",
  time: "23 UHR",
  venue: "Nachtwerk Club · München",
  ticketUrl: "https://rausgegangen.de/events/eudaimonia-2/",
  instagramUrl: "https://www.instagram.com/eudaimonia.de/",
  instagramHandle: "@eudaimonia.de",
  siteUrl: "https://eudaimonia-event.de",
  // ISO date for structured data
  isoDate: "2026-05-02T23:00:00+02:00",
  isoDateEnd: "2026-05-03T06:00:00+02:00",
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
    name: "Interactive Performance",
    desc: "Erwartet euch eine interaktive Performance, die ihr so noch nicht erlebt habt – stay curious.",
  },
  {
    time: "01:00",
    name: "FLOSS",
    origin: "Berlin",
    genre: "POP · TECHNO",
    desc: "Treibender Techno trifft Charli XCX, SixSex, Slayyyter, Miss Bashful, Rihanna und MARINA. Baddie. Sexy. Empowering.",
  },
];
