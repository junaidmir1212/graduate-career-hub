import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const applications = await prisma.application.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(applications);
}

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.company || !body.role || !body.location) {
    return NextResponse.json({ error: 'Company, role and location are required.' }, { status: 400 });
  }
  const application = await prisma.application.create({
    data: {
      company: body.company,
      role: body.role,
      location: body.location,
      status: body.status || 'Applied',
      notes: body.notes || null,
      link: body.link || null
    }
  });
  return NextResponse.json(application, { status: 201 });
}
