import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const body = await request.json();

  const application = await prisma.application.update({
    where: { id },
    data: {
      company: body.company,
      role: body.role,
      location: body.location,
      status: body.status,
      notes: body.notes,
      link: body.link,
    },
  });

  return NextResponse.json(application);
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;

  await prisma.application.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}