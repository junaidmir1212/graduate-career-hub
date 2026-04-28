export const dynamic = "force-dynamic";
import { prisma } from '@/lib/prisma';

export default async function DashboardPage() {
  const [applications, projects, skills] = await Promise.all([
    prisma.application.findMany(),
    prisma.project.findMany(),
    prisma.skill.findMany()
  ]);
  const interviews = applications.filter(a => a.status === 'Interview').length;
  const avgSkill = skills.length ? Math.round(skills.reduce((sum, s) => sum + s.level, 0) / skills.length) : 0;
  return (
    <main className="container hero">
      <span className="badge">Live database dashboard</span>
      <h1>Career Dashboard</h1>
      <section className="grid">
        <div className="card"><p>Total Applications</p><div className="stat">{applications.length}</div></div>
        <div className="card"><p>Interview Stage</p><div className="stat">{interviews}</div></div>
        <div className="card"><p>Portfolio Projects</p><div className="stat">{projects.length}</div></div>
        <div className="card"><p>Tracked Skills</p><div className="stat">{skills.length}</div></div>
        <div className="card"><p>Average Skill Confidence</p><div className="stat">{avgSkill}%</div></div>
        <div className="card"><p>Stack</p><h3>Next.js + Prisma</h3><p>Server-rendered dashboard with database queries.</p></div>
      </section>
    </main>
  );
}
