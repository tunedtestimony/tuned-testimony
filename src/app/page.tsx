import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import SiteHeader from "@/components/SiteHeader";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const featuredMusic = [
  {
    title: "Precious Savior, Dear Redeemer",
    subtitle: "Pop Version",
    collection: "Hymns",
    image: "/featured/precious-savior-dear-redeemer.png",
    className: "hymns",
    href: "/songs/precious-savior-dear-redeemer",
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

const platforms = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@TunedTestimony",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3tR9srCtThH37vZO1C8GEF",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/tuned-testimony/6772563383",
  },
  {
    name: "YouTube Music",
    url: "https://music.youtube.com/@TunedTestimony",
  },
  {
    name: "Amazon Music",
    url: "https://music.amazon.com/artists/B0H2SK8KCY/tuned-testimony?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_nWgqlPTOqjXn1dupen3Nr0fHZ",
  },
  {
    name: "Tidal",
    url: "https://tidal.com/artist/80089012/u",
  },
];

const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@TunedTestimony",
    icon: FaYoutube,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tunedtestimony/",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@tunedtestimony",
    icon: FaTiktok,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61590150252230",
    icon: FaFacebook,
  },
  {
    name: "X",
    url: "https://x.com/tunedtestimony",
    icon: FaXTwitter,
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Image
            className={styles.heroLogo}
            src="/tuned-testimony-logo.png"
            alt="Tuned Testimony"
            width={300}
            height={300}
            priority
          />
          <p className="eyebrow">Faith • Scripture • Music</p>

          <h1>Tuned Testimony</h1>

          <p className={styles.heroDescription}>
            Reimagined hymns, scripture songs, conference messages, and
            original music created to strengthen faith in Jesus Christ.
          </p>

          <div className={styles.heroActions}>
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
          <section className={styles.featuredSection}>
            <div className={styles.sectionHeading}>
              <p className="eyebrow">Featured Music</p>
              <h2>A Taste of Tuned Testimony</h2>
              <p>
                Four songs. Four collections. Four very different ways music can carry
                testimony.
              </p>
            </div>

            <div className={styles.featuredGrid}>
          {featuredMusic.map((song) => {
            const content = (
              <>
                <div className={styles.featuredImageWrap}>
                  <Image
                    src={song.image}
                    alt={song.title}
                    width={1600}
                    height={900}
                    className={styles.featuredImage}
                  />
                </div>

                <div className={styles.featuredCardContent}>
                  <p className={styles.featuredCollection}>{song.collection}</p>
                  <h3>{song.title}</h3>
                  <p className={styles.featuredSubtitle}>{song.subtitle}</p>
                </div>
              </>
            );

            return song.href ? (
              <Link
                href={song.href}
                className={`${styles.featuredCard} ${styles[song.className]}`}
                key={song.title}
              >
                {content}
              </Link>
            ) : (
              <article
                className={`${styles.featuredCard} ${styles[song.className]}`}
                key={song.title}
              >
                {content}
              </article>
            );
          })}
            </div>
          </section>
          <section className={styles.listenSection} id="listen">
            <div className={styles.sectionHeading}>
              <p className="eyebrow">Listen Everywhere</p>
              <h2>Take Tuned Testimony With You</h2>
              <p>
                Find Tuned Testimony on your favorite music and video platforms.
              </p>
            </div>
            <div className={styles.platformGrid}>
              {platforms.map((platform) => (
                <a
                  className={styles.platformLink}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={platform.name}
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </section>
          <section className={styles.musicSection} id="music">
            <div className={styles.sectionHeading}>
              <p className="eyebrow">Explore the Music</p>
              <h2>Find Your Collection</h2>
              <p>
                Hymns, scripture, conference messages, original songs, and music for
                children—each with its own sound and purpose.
              </p>
            </div>

            <div className={styles.collectionGrid}>
              <Link
                href="/hymns"
                className={`${styles.collectionCard} ${styles.hymns}`}
              >
                <h3>Hymns</h3>
                <p>Timeless hymns reimagined in new musical styles.</p>
              </Link>

              <article className={`${styles.collectionCard} ${styles.scripture}`}>
                <h3>Scripture Songs</h3>
                <p>Scripture set to music for learning and reflection.</p>
              </article>

              <article className={`${styles.collectionCard} ${styles.conference}`}>
                <h3>Conference Songs</h3>
                <p>General Conference messages transformed into song.</p>
              </article>

              <article className={`${styles.collectionCard} ${styles.originals}`}>
                <h3>Original Songs</h3>
                <p>Original faith-centered music rooted in testimony and experience.</p>
              </article>

              <article className={`${styles.collectionCard} ${styles.children}`}>
                <h3>Children&apos;s Songs</h3>
                <p>Beloved songs for children in fresh musical styles.</p>
              </article>
              <article className={`${styles.collectionCard} ${styles.international}`}>
                <h3>International Hymns</h3>
                <p>Beloved hymns shared in languages and musical styles from around the world.</p>
              </article>
            </div>
          </section>
        </div>
      </section>
      <footer className={styles.siteFooter}>
        <p>© 2026 Tuned Testimony</p>
        <div className={styles.socialLinks}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                key={social.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <p>Faith • Scripture • Music</p>
      </footer>
    </main>
  );
}
