import Image from "next/image";

const featuredMusic = [
  {
    title: "Precious Savior, Dear Redeemer",
    subtitle: "Pop Version",
    collection: "Hymns",
    image: "/featured/precious-savior-dear-redeemer.png",
    className: "hymns",
  },
  {
    title: "1 Samuel 16:7",
    subtitle: "Looketh on the Heart",
    collection: "Scripture",
    image: "/featured/1-samuel-16-7.png",
    className: "scripture",
  },
  {
    title: "Clark G. Gilbert: Come Home",
    subtitle: "Conference Talk Song — Apr 2026",
    collection: "Conference",
    image: "/featured/come-home.png",
    className: "conference",
  },
  {
    title: "The Mormon Mafia",
    subtitle: "Original Song",
    collection: "Originals",
    image: "/featured/mormon-mafia.png",
    className: "originals",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="site-brand" href="#">
          Tuned Testimony
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#music">Music</a>
          <a href="#listen">Listen</a>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <Image
            className="hero-logo"
            src="/tuned-testimony-logo.png"
            alt="Tuned Testimony"
            width={300}
            height={300}
            priority
          />
          <p className="eyebrow">Faith • Scripture • Music</p>

          <h1>Tuned Testimony</h1>

          <p className="hero-description">
            Reimagined hymns, scripture songs, conference messages, and
            original music created to strengthen faith in Jesus Christ.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#music">
              Explore the Music
            </a>
            <a
              className="button button-secondary"
              href="https://www.youtube.com/@tunedtestimony"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen on YouTube
            </a>
          </div>
          <section className="featured-section">
            <div className="section-heading">
              <p className="eyebrow">Featured Music</p>
              <h2>A Taste of Tuned Testimony</h2>
              <p>
                Four songs. Four collections. Four very different ways music can carry
                testimony.
              </p>
            </div>

            <div className="featured-grid">
              {featuredMusic.map((song) => (
                <article
                  className={`featured-card ${song.className}`}
                  key={song.title}
                >
                  <div className="featured-image-wrap">
                    <Image
                      src={song.image}
                      alt={song.title}
                      width={1600}
                      height={900}
                      className="featured-image"
                    />
                  </div>

                  <div className="featured-card-content">
                    <p className="featured-collection">{song.collection}</p>
                    <h3>{song.title}</h3>
                    <p className="featured-subtitle">{song.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="listen-section" id="listen">
            <div className="section-heading">
              <p className="eyebrow">Listen Everywhere</p>
              <h2>Take Tuned Testimony With You</h2>
              <p>
                Find Tuned Testimony on your favorite music and video platforms.
              </p>
            </div>

            <div className="platform-grid">
              <span className="platform-link">YouTube</span>
              <span className="platform-link">Spotify</span>
              <span className="platform-link">Apple Music</span>
              <span className="platform-link">YouTube Music</span>
              <span className="platform-link">Amazon Music</span>
              <span className="platform-link">Tidal</span>
            </div>
          </section>
          <section className="music-section" id="music">
            <div className="section-heading">
              <p className="eyebrow">Explore the Music</p>
              <h2>Find Your Collection</h2>
              <p>
                Hymns, scripture, conference messages, original songs, and music for
                children—each with its own sound and purpose.
              </p>
            </div>

            <div className="collection-grid">
              <article className="collection-card hymns">
                <h3>Hymns</h3>
                <p>Timeless hymns reimagined in new musical styles.</p>
              </article>

              <article className="collection-card scripture">
                <h3>Scripture Songs</h3>
                <p>Scripture set to music for learning and reflection.</p>
              </article>

              <article className="collection-card conference">
                <h3>Conference Songs</h3>
                <p>General Conference messages transformed into song.</p>
              </article>

              <article className="collection-card originals">
                <h3>Original Songs</h3>
                <p>Original faith-centered music rooted in testimony and experience.</p>
              </article>

              <article className="collection-card children">
                <h3>Children&apos;s Songs</h3>
                <p>Beloved songs for children in fresh musical styles.</p>
              </article>
              <article className="collection-card international">
                <h3>International Hymns</h3>
                <p>Beloved hymns shared in languages and musical styles from around the world.</p>
              </article>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
