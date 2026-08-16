import { aRoyalArmySongs } from "./hymns/a-royal-army";
import { boundlessGraceSongs } from "./hymns/boundless-grace";
import { everNearSongs } from "./hymns/ever-near";
import { primaryDaysSongs } from "./hymns/primary-days";
import { hymnSingles } from "./hymns/singles";
import { kidsSingles } from "./kids/singles";
import { internationalSingles } from "./international/singles";
import { scriptureSingles } from "./scripture/singles";
import { april2026ConferenceSongs } from "./conference/2026-april";
import { originalSingles } from "./originals/singles";

export const songs = [
  ...everNearSongs,
  ...aRoyalArmySongs,
  ...boundlessGraceSongs,
  ...primaryDaysSongs,
  ...hymnSingles,
  ...kidsSingles,
  ...internationalSingles,
  ...scriptureSingles,
  ...april2026ConferenceSongs,
  ...originalSingles,
];
