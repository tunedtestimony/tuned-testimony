import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { songs } from "@/data/songs";
import { scriptureCollections } from "@/data/scripture-collections";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const volumeNames: Record<string, string> = {
  "old-testament": "Old Testament",
  "new-testament": "New Testament",
  "book-of-mormon": "Book of Mormon",
  "doctrine-and-covenants": "Doctrine & Covenants",
  "pearl-of-great-price": "Pearl of Great Price",
};

export default async function ScriptureCollectionPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const collection = scriptureCollections.find(
    (item) => item.slug === slug,
  );

  const scriptureVolume = volumeNames[slug];

  if (!collection || !scriptureVolume) {
    notFound();
  }

  const collectionSongs = songs.filter(
    (song) =>
      song.collection === "Scripture" &&
      song.scriptureVolume === scriptureVolume,
  );

  const books = Array.from(
    new Set(
      collectionSongs
        .map((song) => song.scriptureBook)
        .filter((book): book is string => Boolean(book)),
    ),
  );

  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="eyebrow">Scripture Collection</p>
          <h1>{collection.title}</h1>
          <p>{collection.subtitle}</p>

          <Link className="button button-secondary" href="/scripture">
            Back to Scripture
          </Link>
        </div>
      </section>
      <section className={styles.catalog}>
        {books.length > 0 ? (
          books.map((book) => {
            const bookSongs = collectionSongs.filter(
              (song) => song.scriptureBook === book,
            );
            return (
              <section key={book} className={styles.bookSection}>
                <div className={styles.bookHeading}>
                <h2>{book}</h2>
                </div>

                <div className={styles.songList}>
                  {bookSongs.map((song) => (
                    <Link
                      key={song.slug}
                      href={`/songs/${song.slug}`}
                      className={styles.songRow}
                    >
                      <div>
                        <span className={styles.reference}>
                          {song.scriptureReference}
                        </span>

                        <h3>{song.title}</h3>
                      </div>

                      <span className={styles.arrow}>→</span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })
        ) : (
          <div className={styles.empty}>
            <h2>Songs coming soon</h2>
            <p>
              Scripture Songs from {collection.title} will be added here.
            </p>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
