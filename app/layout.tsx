import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Graduate Career Hub',
  description: 'Full-stack career management platform for graduate software engineering applications.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer className="footer"><div className="container">Built by Muhammad Junaid Mir · Full-stack Next.js project</div></footer>
      </body>
    </html>
  );
}
