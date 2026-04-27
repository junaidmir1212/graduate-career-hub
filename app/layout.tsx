import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Graduate Career Hub',
  description: 'Full-stack career management platform for graduate software engineering applications.'
};

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.21 9.18 7.66 10.67.56.1.76-.24.76-.54v-2.02c-3.12.68-3.78-1.34-3.78-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 .1.56 2.64 2.95 1.9.1-.73.39-1.22.71-1.5-2.49-.28-5.1-1.25-5.1-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.31-2.62 5.27-5.12 5.55.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54 4.44-1.49 7.65-5.71 7.65-10.67C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.53V9H7.1v11.45ZM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}

        <footer className="footer">
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              padding: '16px 20px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #0f172a, #020617)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: '16px' }}>
                Muhammad Junaid Mir
              </h3>
              <p style={{ margin: 0, fontSize: '13px', opacity: 0.7 }}>
                BSc (Hons) Computer Science Graduate Portfolio · AI · NLP · Software Projects
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="https://github.com/junaidmir1212" target="_blank" rel="noopener noreferrer" className="icon-btn">
                <GitHubIcon />
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/muhammad-junaid-mir-081479266/" target="_blank" rel="noopener noreferrer" className="icon-btn">
                <LinkedInIcon />
                LinkedIn
              </a>

              <a href="mailto:junaidmir1212@gmail.com" className="icon-btn">
                <MailIcon />
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}