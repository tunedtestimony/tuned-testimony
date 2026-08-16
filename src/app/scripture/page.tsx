import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { scriptureSingles } from "@/data/songs/scripture/singles";
import type { ScriptureVolume } from "@/data/songs/types";
import styles from "./page.module.css";

const scriptureVolumeOrder: ScriptureVolume[] = [
  "Old Testament",
  "New Testament",
  "Book of Mormon",
  "Doctrine & Covenants",
  "Pearl of Great Price",
];

export default function ScripturePage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="eyebrow">Scripture Collection</p>
          <h1>Scripture Songs</h1>
          <p>
            Scripture set to music to make sacred words easier to remember,
            revisit, and carry with you.
          </p>

          <Link className="button button-secondary" href="/">
            Back to Home
          </Link>
        </div>
      </section>

      <section className={styles.scriptureSection}>
        <div className={styles.sectionHeading}>
          <p className="eyebrow">Explore the Scriptures</p>
          <h2>Browse by Book of Scripture</h2>
          <p>
            Find scripture songs organized by the standard works and the books
            within them.
          </p>
        </div>

        {scriptureVolumeOrder.map((volume) => {
          const volumeSongs = scriptureSingles.filter(
            (song) => song.scriptureVolume === volume,
          );

          if (volumeSongs.length === 0) {
            return null;
          }

          const books = Array.from(
            new Set(
              volumeSongs
                .map((song) => song.scriptureBook)
                .filter((book): book is string => Boolean(book)),
            ),
          );

          return (
            <section className={styles.volumeSection} key={volume}>
              <h3 className={styles.volumeHeading}>{volume}</h3>

              <div className={styles.books}>
                {books.map((book) => {
                  const bookSongs = volumeSongs
                    .filter((song) => song.scriptureBook === book)
                    .sort(
                      (a, b) =>
                        new Date(b.releaseDate ?? 0).getTime() -
                        new Date(a.releaseDate ?? 0).getTime(),
                    );

                  return (
                    <section className={styles.bookSection} key={book}>
                      <h4 className={styles.bookHeading}>{book}</h4>

                      <div className={styles.songGrid}>
                        {bookSongs.map((song) => (
                          <Link
                            key={song.slug}
                            href={`/songs/${song.slug}`}
                            className={styles.songCard}
                          >
                            {song.image && (
                              <Image
                                src={song.image}
                                alt={`${song.scriptureReference ?? song.title} cover art`}
                                width={600}
                                height={600}
                                className={styles.songImage}
                              />
                            )}

                            <div className={styles.songContent}>
                              {song.scriptureReference && (
                                <p className={styles.reference}>
                                  {song.scriptureReference}
                                </p>
                              )}

                              <h5>{song.title}</h5>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>
          );
        })}
      </section>

      <SiteFooter />
    </main>
  );
}
