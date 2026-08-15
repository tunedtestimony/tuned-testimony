import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <main className="album-page">
      <section className="album-hero">
        <div className="album-hero-grid">
          <div className="album-hero-art">
            <Image
              src={album.image}
              alt={`${album.title} album cover`}
              width={700}
              height={700}
              priority
            />
          </div>

          <div className="album-hero-content">
            <p className="eyebrow">Hymns Collection</p>
            <h1>{album.title}</h1>
            <p className="album-subtitle">{album.subtitle}</p>

            <div className="album-actions">
              <Link className="button button-secondary" href="/hymns">
                Back to Hymns
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
