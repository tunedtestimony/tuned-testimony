import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { songs } from "@/data/songs";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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

  return (
    <main className={styles.page}>
      <SiteHeader />
			<section className={styles.hero}>
				<div className={styles.heroGrid}>
					<div className={styles.heroImage}>
            <Image
              src={song.image}
              alt={`${song.title} official lyric video thumbnail`}
              width={1600}
              height={900}
              priority
            />
          </div>

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
            <div className={styles.listen}>
              <p className={styles.listenLabel}>Listen &amp; Watch</p>

              <div className={styles.listenLinks}>
                {song.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.listenLink}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
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
