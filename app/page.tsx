import Link from 'next/link';

export default function Home() {
  return (
    <main className="container hero">
      <span className="badge">Full-stack portfolio project · Next.js · Prisma · Database</span>
      <h1>Track graduate applications, projects and skills in one professional hub.</h1>
      <p style={{maxWidth: '760px'}}>Graduate Career Hub is a full-stack web application designed for a UK graduate software engineering profile. It demonstrates frontend UI design, backend API routes, database persistence, Prisma ORM and deployable architecture.</p>
      <div className="actions">
        <Link className="btn" href="/dashboard">Open Dashboard</Link>
        <Link className="btn secondary" href="/applications">Manage Applications</Link>
      </div>
      <section className="grid">
        <div className="card"><h3>Application Tracking</h3><p>Store companies, roles, statuses, notes and links using real CRUD API routes.</p></div>
        <div className="card"><h3>Project Proof</h3><p>Showcase technical projects including NLP, blockchain and full-stack engineering work.</p></div>
        <div className="card"><h3>Skills Matrix</h3><p>Map technical skills with categories and confidence levels for career readiness.</p></div>
      </section>
    </main>
  );
}
