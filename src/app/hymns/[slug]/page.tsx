import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { hymnAlbums } from "@/data/hymn-albums";

type HymnAlbumPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function HymnAlbumPage({
  params,
}: HymnAlbumPageProps) {
  const { slug } = await params;

  const album = hymnAlbums.find((item) => item.slug === slug);

  if (!album) {
    notFound();
  }

  return (
    <main className={styles.page}>
			<section className={styles.hero}>
				<div className={styles.heroGrid}>
					<div className={styles.heroArt}>
            <Image
              src={album.image}
              alt={`${album.title} album cover`}
              width={700}
              height={700}
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <p className="eyebrow">Hymns Collection</p>
            <h1>{album.title}</h1>
            <p className={styles.subtitle}>{album.subtitle}</p>
			{album.links.length > 0 && (
			<div className={styles.listen}>
				<p className={styles.listenLabel}>Listen to the Album</p>

				<div className={styles.listenLinks}>
				{album.links.map((link) => (
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
			)}
            <div className={styles.actions}>
              <Link className="button button-secondary" href="/hymns">
                Back to Hymns
              </Link>
            </div>
          </div>
        </div>
      </section>
		{album.tracks.length > 0 && (
			<section className={styles.trackSection}>
				<div className={styles.trackSectionHeader}>
					<p className="eyebrow">Track List</p>
					<h2>{album.title}</h2>
					<p>
						{album.tracks.length} {album.tracks.length === 1 ? "song" : "songs"}
					</p>
				</div>

				<ol className={styles.trackList}>
					{album.tracks.map((track, index) => (
						<li className={styles.trackItem} key={track.title}>
							<span className={styles.trackNumber}>
								{String(index + 1).padStart(2, "0")}
							</span>

							{"songSlug" in track && track.songSlug ? (
								<Link
									className={styles.trackLink}
									href={`/songs/${track.songSlug}`}
								>
									<span className={styles.trackTitle}>{track.title}</span>
									<span className={styles.trackStyle}>{track.style}</span>
								</Link>
							) : (
								<div className={styles.trackDetails}>
									<span className={styles.trackTitle}>{track.title}</span>
									<span className={styles.trackStyle}>{track.style}</span>
								</div>
							)}
						</li>
					))}
				</ol>
			</section>
		)}
    </main>
  );
}
