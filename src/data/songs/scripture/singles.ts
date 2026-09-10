import type { Song } from "../types";
import { oldTestamentSingles } from "./old-testament";
import { pearlOfGreatPriceSingles } from "./pearl-of-great-price";
import { doctrineAndCovenantsSingles } from "./doctrine-and-covenants";

// Keep the shared export and existing song order for catalog consumers.
export const scriptureSingles: Song[] = [
  ...oldTestamentSingles,
  ...pearlOfGreatPriceSingles,
  ...doctrineAndCovenantsSingles,
];
