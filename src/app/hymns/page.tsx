import Image from "next/image";
import Link from "next/link";

const albums = [
  {
    title: "Primary Days",
    subtitle: "Timeless songs. Eternal truths.",
    image: "/albums/primary-days.png",
  },
  {
    title: "Ever Near",
    subtitle: "Hymns of faith, peace & trust in our Savior",
    image: "/albums/ever-near.png",
  },
  {
    title: "A Royal Army",
    subtitle: "Songs of faith and service",
    image: "/albums/a-royal-army.png",
  },
  {
    title: "Boundless Grace",
    subtitle: "Inspirational hymn collection",
    image: "/albums/boundless-grace.png",
  },
];

export default function HymnsPage() {
  return (
    <main className="collection-page hymns-page">
      <section className="collection-hero">
        <div className="collection-hero-content">
          <p className="eyebrow">Hymns Collection</p>
          <h1>Hymns</h1>
          <p>
            Timeless hymns reimagined in new musical styles while preserving
            the faith, testimony, and message at their heart.
          </p>

          <Link className="button button-secondary" href="/">
            Back to Home
          </Link>
        </div>
      </section>
      <section className="albums-section">
        <div className="section-heading">
          <p className="eyebrow">The Collection</p>
          <h2>Albums</h2>
          <p>
            Explore hymn collections reimagined across a variety of musical styles.
          </p>
        </div>

        <div className="album-grid">
          {albums.map((album) => (
            <article className="album-card" key={album.title}>
              <div className="album-art">
                <Image
                  src={album.image}
                  alt={`${album.title} album cover`}
                  width={600}
                  height={600}
                />
              </div>

              <div className="album-info">
                <h3>{album.title}</h3>
                <p>{album.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
