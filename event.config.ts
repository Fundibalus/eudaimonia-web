// ─────────────────────────────────────────────────────────────
//  EUDAIMONIA — Event-Konfiguration
//  Hier alles anpassen für jeden neuen Termin.
// ─────────────────────────────────────────────────────────────

export const event = {
  date: "3.OKTOBER",
  time: "23 UHR",
  venue: "Nachtwerk Club · München",
  ticketUrl: "https://tickets.nachtwerk-club.de/ticket-client/event/oxbyuv?mode=ticket",
  instagramUrl: "https://www.instagram.com/eudaimonia.de/",
  instagramHandle: "@eudaimonia.de",
  siteUrl: "https://eudaimonia-event.de",
  // ISO date for structured data
  isoDate: "2026-10-03T23:00:00+02:00",
  isoDateEnd: "2026-10-04T06:00:00+02:00",
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
    time: "",
    name: "Specials",
    genre: "Drag Show · Wiesn Gaymes",
    desc: "Drag Show, WIESN GAYMES 2026 und mehr! Bayerische Disziplinen, aber make it queer: Fingerhakeln, Maßkrugstemmen, ein cunty-bayerisches Dance Battle und mehr. Auf der Bühne, vor Publikum und mit fetten Preisen.",
  },
  {
    time: "ab 23 Uhr",
    name: "DJ DYNA",
    desc: "Von 00–01 Uhr gibt's ein ganz besonderes Deutsch-Special – mit Songs von und angelehnt an Artists wie Baran Kok, Filow, Ikkimel, Mariybu & Co.",
  },
  {
    time: "ab 02 Uhr",
    name: "CALLHERDOG",
    desc: "Übernimmt den Dancefloor und steht für Eskapismus, Verbindung und die gemeinsame Auszeit vom Alltag. Musik, die uns loslassen, tanzen und einfach wir selbst sein lässt.",
  },
];
