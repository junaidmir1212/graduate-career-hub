export const dynamic = "force-dynamic";
import { prisma } from '@/lib/prisma';

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
  return (
    <main className="container hero">
      <span className="badge">Portfolio proof of ability</span>
      <h1>Projects</h1>
      <section className="grid">
        {projects.map(project => (
          <article className="card" key={project.id}>
            <span className="pill">{project.category}</span>
            <h3 style={{marginTop: 12}}>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.techStack}</p>
            {project.githubUrl && <a className="btn secondary" href={project.githubUrl} target="_blank">View GitHub</a>}
          </article>
        ))}
      </section>
    </main>
  );
}
