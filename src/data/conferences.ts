export type ConferenceMonth = "April" | "October";

export type Conference = {
  slug: string;
  year: number;
  month: ConferenceMonth;
  title: string;
  image?: string;
};

export const conferences: Conference[] = [
    {
    slug: "2026-april",
    year: 2026,
    month: "April",
    title: "April 2026 General Conference",
    image: "/songs/conference/2026-april/default.png",
    },
  {
    slug: "2021-april",
    year: 2021,
    month: "April",
    title: "April 2021 General Conference",
  },
  {
    slug: "2007-april",
    year: 2007,
    month: "April",
    title: "April 2007 General Conference",
  },
  {
    slug: "1998-april",
    year: 1998,
    month: "April",
    title: "April 1998 General Conference",
  },
  {
    slug: "1989-april",
    year: 1989,
    month: "April",
    title: "April 1989 General Conference",
  },
  {
    slug: "1976-april",
    year: 1976,
    month: "April",
    title: "April 1976 General Conference",
  },
];
