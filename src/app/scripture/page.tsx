import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { scriptureCollections } from "@/data/scripture-collections";
import styles from "./page.module.css";

export default function ScripturePage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="eyebrow">Scripture Collection</p>
          <h1>Scripture Songs</h1>
          <p>
            Explore scripture set to music, organized by the standard works.
          </p>

          <Link className="button button-secondary" href="/">
            Back to Home
          </Link>
        </div>
      </section>

      <section className={styles.collectionsSection}>
        <div className={styles.sectionHeading}>
          <p className="eyebrow">Explore the Scriptures</p>
          <h2>Standard Works</h2>
          <p>
            Choose a collection to explore songs organized by book of scripture.
          </p>
        </div>
        <div className={styles.collections}>
        {scriptureCollections.map((collection) => (
            <Link
            key={collection.slug}
            href={`/scripture/${collection.slug}`}
            className={styles.card}
            >
            <div className={styles.imageWrapper}>
                <Image
                src={collection.image}
                alt={`${collection.title} Scripture Collection`}
                width={320}
                height={320}
                className={styles.image}
                />
            </div>
            <div className={styles.cardContent}>
                <h3>{collection.title}</h3>
                <p>{collection.subtitle}</p>
                <span className={styles.explore}>Explore songs →</span>
            </div>
            </Link>
        ))}
        </div>

      </section>

      <SiteFooter />
    </main>
  );
}
