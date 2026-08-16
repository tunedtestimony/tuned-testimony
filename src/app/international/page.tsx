import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { internationalSingles } from "@/data/songs/international/singles";
import styles from "./page.module.css";

const languageOrder = [
  "Portuguese",
  "Spanish",
  "Tagalog",
  "German",
];

export default function InternationalPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="eyebrow">International Collection</p>
          <h1>International Hymns</h1>
          <p>
            Beloved hymns shared across languages and cultures, celebrating
            faith and testimony through music from around the world.
          </p>

          <Link className="button button-secondary" href="/">
            Back to Home
          </Link>
        </div>
      </section>

			<section className={styles.singlesSection}>
				<div className={styles.sectionHeading}>
					<p className="eyebrow">Around the World</p>
					<h2>Explore by Language</h2>
					<p>
						Discover hymn arrangements in languages from around the world.
					</p>
				</div>

				{languageOrder.map((language) => {
					const songs = internationalSingles
						.filter((song) => song.style === language)
						.sort(
							(a, b) =>
								new Date(b.releaseDate ?? 0).getTime() -
								new Date(a.releaseDate ?? 0).getTime(),
						);

					if (songs.length === 0) {
						return null;
					}

					return (
						<section className={styles.languageSection} key={language}>
							<h3 className={styles.languageHeading}>{language}</h3>

							<div className={styles.singlesGrid}>
								{songs.map((song) => (
									<Link
										key={song.slug}
										href={`/songs/${song.slug}`}
										className={styles.singleCard}
									>
										{song.image && (
											<Image
												src={song.image}
												alt={`${song.title} cover art`}
												width={600}
												height={600}
												className={styles.singleImage}
											/>
										)}

										<div className={styles.singleContent}>
											<h3>{song.title}</h3>
										</div>
									</Link>
								))}
							</div>
						</section>
					);
				})}
			</section>

      <SiteFooter />
    </main>
  );
}
