type StreamingLink = {
  name: string;
  url: string;
};

type Song = {
  slug: string;
  title: string;
  collection: string;
  style: string;
  albumSlug: string;
  albumTitle: string;
  image?: string;
  description: string;
  links: StreamingLink[];
};

export const songs: Song[] = [
  {
    slug: "precious-savior-dear-redeemer",
    title: "Precious Savior, Dear Redeemer",
    collection: "Hymns",
    style: "Pop",
    albumSlug: "ever-near",
    albumTitle: "Ever Near",
    image: "/featured/precious-savior-dear-redeemer.png",
    description:
      "A fresh pop reimagining of the beloved hymn Precious Savior, Dear Redeemer.",
    links: [
      {
        name: "YouTube",
        url: "https://youtu.be/N87LBU9N2Qc",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/3ti0eWLeRzZGtzDya1ArIU?si=28a13857bc1f4efe",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/song/precious-savior-dear-redeemer-pop/1820876439",
      },
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/watch?v=4HKt-YDMgIs&si=KeagF5Zd6ezJOBGa",
      },
      {
        name: "Amazon Music",
        url: "https://music.amazon.com/tracks/B0FD9YM2YM?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_jLrKssNgTcmXM2IfSuYMGKyA4",
      },
      {
        name: "Tidal",
        url: "https://tidal.com/track/442347901/u",
      },
    ],
  },
  {
    slug: "nearer-my-god-to-thee-piano-ballad",
    title: "Nearer, My God, To Thee",
    collection: "Hymns",
    style: "Piano Ballad",
    albumSlug: "ever-near",
    albumTitle: "Ever Near",
    description:
      "A tender piano ballad reimagining of the beloved hymn Nearer, My God, To Thee.",
    links: [],
  },
];
