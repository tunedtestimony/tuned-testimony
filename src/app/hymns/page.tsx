import Link from "next/link";

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
    </main>
  );
}
