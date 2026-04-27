import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.application.deleteMany();
  await prisma.project.deleteMany();
  await prisma.skill.deleteMany();

  await prisma.application.createMany({
    data: [
      { company: 'TPP', role: 'Graduate Software Engineer', location: 'Leeds, UK', status: 'Preparing', notes: 'Tailor CV around SQL, systems and problem solving.' },
      { company: 'Bending Spoons', role: 'Graduate Software Engineer', location: 'London / Remote', status: 'Applied', notes: 'Strong fit for full-stack and product engineering.' }
    ]
  });

  await prisma.project.createMany({
    data: [
      {
        title: 'Fake News Detection using NLP',
        category: 'Machine Learning / NLP',
        description: 'Supervised text classification project using TF-IDF and machine learning models to classify fake and real news content.',
        techStack: 'Python, scikit-learn, Pandas, TF-IDF, Logistic Regression',
        githubUrl: 'https://github.com/junaidmir1212/Fake-News-Detection-on-Social-Media-Using-Natural-Language-Processing-NLP-'
      },
      {
        title: 'Blockchain Event Ticketing DApp',
        category: 'Blockchain / Web3',
        description: 'Proof-of-concept DApp for secure event ticket issuance and validation using smart contracts and NFT-based ownership verification.',
        techStack: 'Solidity, Ethereum, Web3.js, JavaScript, Smart Contracts',
        githubUrl: 'https://github.com/junaidmir1212/-Event-Ticketing-D-App'
      },
      {
        title: 'Graduate Career Hub',
        category: 'Full-Stack Web Application',
        description: 'Career management system for tracking graduate applications, portfolio projects and technical skills using a full-stack architecture.',
        techStack: 'Next.js, TypeScript, Prisma, SQLite/PostgreSQL',
        githubUrl: 'https://github.com/junaidmir1212/graduate-career-hub.git'
      }
    ]
  });

  await prisma.skill.createMany({
    data: [
      { name: 'Next.js', category: 'Frontend / Full Stack', level: 82 },
      { name: 'TypeScript', category: 'Programming', level: 78 },
      { name: 'Python', category: 'Programming', level: 86 },
      { name: 'SQL / Databases', category: 'Backend', level: 80 },
      { name: 'Machine Learning / NLP', category: 'AI', level: 84 },
      { name: 'Git & GitHub', category: 'Tools', level: 85 }
    ]
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
