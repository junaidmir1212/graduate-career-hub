import Link from 'next/link';

export default function Nav() {
  return (
    <header className="container nav">
      <Link href="/" className="logo">Graduate Career Hub</Link>
      <nav className="navlinks">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/applications">Applications</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
      </nav>
    </header>
  );
}
