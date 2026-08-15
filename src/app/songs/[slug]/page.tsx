import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { songs } from "@/data/songs";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StreamingLinks from "@/components/StreamingLinks";
import { hymnAlbums } from "@/data/hymn-albums";

type SongPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SongPage({ params }: SongPageProps) {
  const { slug } = await params;

  const song = songs.find((item) => item.slug === slug);

  if (!song) {
    notFound();
  }

  const album = hymnAlbums.find(
    (item) => item.slug === song.albumSlug
  );

  const image = song.image ?? album?.image;

  return (
    <main className={styles.page}>
      <SiteHeader />
			<section className={styles.hero}>
				<div className={styles.heroGrid}>
      {image && (
        <div className={styles.heroImage}>
          <Image
            src={image}
            alt={`${song.title} artwork`}
            width={1600}
            height={900}
            priority
          />
        </div>
      )}

          <div className={styles.heroContent}>
            <p className="eyebrow">{song.collection} Collection</p>

            <h1>{song.title}</h1>

            <p className={styles.style}>{song.style}</p>

            <p className={styles.description}>{song.description}</p>

            <div className={styles.meta}>
              <span>From the album</span>
              <Link href={`/hymns/${song.albumSlug}`}>
                {song.albumTitle}
              </Link>
            </div>
            <StreamingLinks
              links={song.links}
              label="Listen & Watch"
            />
						<div className={styles.actions}>
              <Link
                  className="button button-secondary"
                  href={`/hymns/${song.albumSlug}`}
              >
                  Back to {song.albumTitle}
              </Link>
              <Link className="button button-secondary" href="/">
                  Home
              </Link>
						</div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
