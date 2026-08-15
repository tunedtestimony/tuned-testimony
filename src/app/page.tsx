import Image from "next/image";
export default function Home() {
  return (
    <main>
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
