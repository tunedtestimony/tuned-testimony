export type StreamingLink = {
  name: string;
  url: string;
};

export type SongCollection =
  | "Hymns"
  | "Kids"
  | "International"
  | "Scripture"
  | "Conference"
  | "Originals";

export type ReleaseType = "Single" | "Album Track";

export type Song = {
  slug: string;
  title: string;
  collection: SongCollection;
  releaseType: ReleaseType;
  releaseDate?: string;
  style: string;
  albumSlug?: string;
  albumTitle?: string;
  image?: string;
  description: string;
  hyperFollow?: string;
  links: StreamingLink[];
};
