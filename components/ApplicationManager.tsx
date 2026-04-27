'use client';

import { useEffect, useState, type FormEvent } from 'react';

type Application = {
  id: string;
  company: string;
  role: string;
  location: string;
  status: string;
  notes?: string | null;
  link?: string | null;
};

const initialForm = {
  company: '',
  role: '',
  location: '',
  status: 'Applied',
  notes: '',
  link: '',
};

export default function ApplicationManager() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  async function loadApplications() {
    try {
      const res = await fetch('/api/applications', {
        cache: 'no-store',
      });

      if (!res.ok) {
        console.error('Failed to load applications');
        return;
      }

      const data = await res.json();
      setApplications(data);
    } catch (error) {
      console.error('Error loading applications:', error);
    }
  }

  useEffect(() => {
    loadApplications();
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      setForm(initialForm);
      await loadApplications();
    } catch (error) {
      console.error('Error saving application:', error);
    } finally {
      setLoading(false);
    }
  }

  async function remove(id: string) {
    try {
      await fetch(`/api/applications/${id}`, {
        method: 'DELETE',
      });

      await loadApplications();
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  }

  return (
    <section className="card">
      <h3>Add New Application</h3>

      <form onSubmit={submit} className="form">
        <input
          required
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />

        <input
          required
          placeholder="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />

        <input
          required
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>Preparing</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <input
          className="full"
          placeholder="Application link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />

        <textarea
          placeholder="Notes"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />

        <button className="btn full" disabled={loading}>
          {loading ? 'Saving...' : 'Save Application'}
        </button>
      </form>

      <h3 style={{ marginTop: 28 }}>Tracked Applications</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Status</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.length === 0 ? (
            <tr>
              <td colSpan={5}>No applications saved yet.</td>
            </tr>
          ) : (
            applications.map((app) => (
              <tr key={app.id}>
                <td>{app.company}</td>

                <td>
                  {app.role}
                  <br />
                  <small>{app.location}</small>
                </td>

                <td>
                  <span className="pill">{app.status}</span>
                </td>

                <td>
                  {app.link ? (
                    <a href={app.link} target="_blank" rel="noreferrer">
                      View
                    </a>
                  ) : (
                    '-'
                  )}
                </td>

                <td>
                  <button
                    type="button"
                    className="btn secondary"
                    onClick={() => remove(app.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}