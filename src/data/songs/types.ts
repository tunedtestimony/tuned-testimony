export type StreamingLink = {
  name: string;
  url: string;
};

export type Song = {
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
