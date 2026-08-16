import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { conferences } from "@/data/conferences";
import { april2026ConferenceSongs } from "@/data/songs/conference/2026-april";
import styles from "./page.module.css";

export default async function ConferenceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const conference = conferences.find((item) => item.slug === slug);

  if (!conference) {
    notFound();
  }

  const conferenceSongs =
    slug === "2026-april" ? april2026ConferenceSongs : [];

  const sessions = Array.from(
    new Map(
      conferenceSongs.map((song) => [
        song.conferenceSession,
        {
          name: song.conferenceSession,
          order: song.conferenceSessionOrder ?? 999,
        },
      ]),
    ).values(),
  )
    .filter((session) => session.name)
    .sort((a, b) => a.order - b.order);

  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="eyebrow">Conference Songs</p>
          <h1>{conference.title}</h1>
          <p>
            Songs inspired by messages from {conference.title}, organized in
            conference order.
          </p>

          <Link className="button button-secondary" href="/conference">
            Back to Conferences
          </Link>
        </div>
      </section>

			<section className={styles.content}></section>
		
		{conference.image && (
			<section className={styles.conferenceArtSection}>
`				<Image
					src={conference.image}
					alt={`${conference.title} artwork`}
					width={800}
					height={800}
					className={styles.conferenceArt}
					priority
				/>
			</section>
		)}

      <section className={styles.content}>
        {sessions.map((session) => {
          const sessionSongs = conferenceSongs
            .filter((song) => song.conferenceSession === session.name)
            .sort(
              (a, b) =>
                (a.conferenceTalkOrder ?? 999) -
                (b.conferenceTalkOrder ?? 999),
            );

          return (
            <section className={styles.sessionSection} key={session.name}>
              <h2>{session.name}</h2>
                <div className={styles.trackList}>
                {sessionSongs.map((song) => (
                    <Link
                    key={song.slug}
                    href={`/songs/${song.slug}`}
                    className={styles.track}
                    >
                    <span className={styles.trackNumber}>
                        {String(song.conferenceTalkOrder ?? "").padStart(2, "0")}
                    </span>

                    <div className={styles.trackInfo}>
                        <p>{song.conferenceSpeaker}</p>
                        <h3>{song.title}</h3>
                    </div>

                    <span className={styles.trackArrow} aria-hidden="true">
                        →
                    </span>
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
