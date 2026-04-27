import ApplicationManager from '@/components/ApplicationManager';

export default function ApplicationsPage() {
  return (
    <main className="container hero">
      <span className="badge">CRUD API Demo</span>
      <h1>Application Tracker</h1>
      <p>
        Track graduate job applications, statuses, links and notes in one place.
      </p>
      <ApplicationManager />
    </main>
  );
}