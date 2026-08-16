import type { Song } from "./types";

export function getSongImage(song: Song, albumImage?: string) {
  if (song.image) {
    return song.image;
  }

  if (
    song.collection === "Conference" &&
    song.conferenceYear &&
    song.conferenceMonth
  ) {
    return `/songs/conference/${song.conferenceYear}-${song.conferenceMonth.toLowerCase()}/default.png`;
  }

  if (albumImage) {
    return albumImage;
  }

  return "/songs/default.png";
}
