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
        </div>
      </section>
    </main>
  );
}
