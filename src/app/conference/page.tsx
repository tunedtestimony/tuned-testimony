import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { conferences } from "@/data/conferences";
import styles from "./page.module.css";

export default function ConferencePage() {
  const conferencesByDecade = conferences.reduce<
    Record<number, typeof conferences>
  >((groups, conference) => {
    const decade = Math.floor(conference.year / 10) * 10;

    groups[decade] ??= [];
    groups[decade].push(conference);

    return groups;
  }, {});

  const decades = Object.keys(conferencesByDecade)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="eyebrow">Conference Collection</p>
          <h1>Conference Songs</h1>
          <p>
            General Conference messages transformed into music.
          </p>

          <Link className="button button-secondary" href="/">
            Back to Home
          </Link>
        </div>
      </section>

      <section className={styles.conferenceSection}>
        <div className={styles.sectionHeading}>
          <p className="eyebrow">Browse the Collection</p>
          <h2>Explore by Conference</h2>
          <p>
            Choose a conference to hear the songs inspired by talks from that
            gathering.
          </p>
        </div>

        <div className={styles.browseOptions}>
          <span className={`${styles.browseOption} ${styles.browseOptionActive}`}>
            By Conference
          </span>

          <Link
            href="/conference/speakers"
            className={styles.browseOption}
          >
            By Speaker
          </Link>
        </div>

        <div className={styles.decadeList}>
          {decades.map((decade, index) => {
            const decadeConferences = [...conferencesByDecade[decade]].sort(
              (a, b) => {
                if (a.year !== b.year) {
                  return b.year - a.year;
                }

                return a.month === "October" ? -1 : 1;
              },
            );

            return (
              <details
                className={styles.decadeSection}
                key={decade}
                open={index === 0}
              >
                <summary className={styles.decadeHeading}>
                  <span>{decade}s</span>
                  <span className={styles.decadeCount}>
                    {decadeConferences.length}{" "}
                    {decadeConferences.length === 1
                      ? "conference"
                      : "conferences"}
                  </span>
                </summary>

                <div className={styles.conferenceGrid}>
                  {decadeConferences.map((conference) => (
                    <Link
                      href={`/conference/${conference.slug}`}
                      className={styles.conferenceCard}
                      key={conference.slug}
                    >
                      <p>
                        {conference.month} {conference.year}
                      </p>
                      <h4>{conference.title}</h4>
                      <span>View songs →</span>
                    </Link>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
