import { aRoyalArmySongs } from "./hymns/a-royal-army";
import { boundlessGraceSongs } from "./hymns/boundless-grace";
import { everNearSongs } from "./hymns/ever-near";
import { primaryDaysSongs } from "./hymns/primary-days";
import { hymnSingles } from "./hymns/singles";
import { kidsSingles } from "./kids/singles";
import { internationalSingles } from "./international/singles";

export const songs = [
  ...everNearSongs,
  ...aRoyalArmySongs,
  ...boundlessGraceSongs,
  ...primaryDaysSongs,
  ...hymnSingles,
  ...kidsSingles,
  ...internationalSingles,
];
