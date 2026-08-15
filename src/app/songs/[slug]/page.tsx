import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { songs } from "@/data/songs";

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
    <main className="song-page">
      <section className="song-hero">
        <div className="song-hero-grid">
          <div className="song-hero-image">
            <Image
              src={song.image}
              alt={`${song.title} official lyric video thumbnail`}
              width={1600}
              height={900}
              priority
            />
          </div>

          <div className="song-hero-content">
            <p className="eyebrow">{song.collection} Collection</p>

            <h1>{song.title}</h1>

            <p className="song-style">{song.style}</p>

            <p className="song-description">{song.description}</p>

            <div className="song-meta">
              <span>From the album</span>
              <Link href={`/hymns/${song.albumSlug}`}>
                {song.albumTitle}
              </Link>
            </div>

						<div className="song-actions">
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
    </main>
  );
}
