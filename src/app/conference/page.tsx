import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { conferences } from "@/data/conferences";
import styles from "./page.module.css";

export default function ConferencePage() {
  const conferencesByYear = conferences.reduce<Record<number, typeof conferences>>(
    (groups, conference) => {
      groups[conference.year] ??= [];
      groups[conference.year].push(conference);
      return groups;
    },
    {},
  );

  const years = Object.keys(conferencesByYear)
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
            General Conference messages transformed into music, organized by
            the conference in which each message was originally given.
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

        {years.map((year) => (
          <section className={styles.yearSection} key={year}>
            <h3>{year}</h3>

            <div className={styles.conferenceGrid}>
              {conferencesByYear[year].map((conference) => (
                <Link
                  href={`/conference/${conference.slug}`}
                  className={styles.conferenceCard}
                  key={conference.slug}
                >
                  <p>{conference.month}</p>
                  <h4>{conference.title}</h4>
                  <span>View songs →</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
