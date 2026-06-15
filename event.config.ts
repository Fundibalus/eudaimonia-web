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

// Lineup für den 15.08.26 steht noch nicht fest.
// Acts hier eintragen, sobald bekannt – der Platzhalter verschwindet dann automatisch.
export const lineup: Act[] = [];
