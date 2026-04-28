export const dynamic = "force-dynamic";
import { prisma } from '@/lib/prisma';

export default async function SkillsPage() {
  const skills = await prisma.skill.findMany({ orderBy: { level: 'desc' } });
  return (
    <main className="container hero">
      <span className="badge">Technical skills matrix</span>
      <h1>Skills</h1>
      <section className="card">
        {skills.map(skill => (
          <div key={skill.id} style={{marginBottom: 20}}>
            <h3>{skill.name}</h3>
            <p>{skill.category} · {skill.level}%</p>
            <div className="progress"><span style={{width: `${skill.level}%`}} /></div>
          </div>
        ))}
      </section>
    </main>
  );
}
