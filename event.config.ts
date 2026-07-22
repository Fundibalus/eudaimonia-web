// ─────────────────────────────────────────────────────────────
//  EUDAIMONIA — Event-Konfiguration
//  Hier alles anpassen für jeden neuen Termin.
// ─────────────────────────────────────────────────────────────

export const event = {
  date: "15.AUGUST",
  time: "22 UHR",
  venue: "Nachtwerk Club · München",
  ticketUrl: "https://tickets.nachtwerk-club.de/ticket-client/event/wbtqbj?mode=ticket",
  instagramUrl: "https://www.instagram.com/eudaimonia.de/",
  instagramHandle: "@eudaimonia.de",
  siteUrl: "https://eudaimonia-event.de",
  // ISO date for structured data
  isoDate: "2026-08-15T22:00:00+02:00",
  isoDateEnd: "2026-08-16T06:00:00+02:00",
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
  { time: "", name: "DJ DYNA", desc: "" },
  { time: "", name: "Barbie Q", genre: "Drag Show · Dance & Pop", desc: "" },
  { time: "", name: "Ivo Bischoff", origin: "Berlin", genre: "Dance & Pop", desc: "" },
];
