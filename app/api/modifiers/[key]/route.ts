import { NextRequest, NextResponse } from 'next/server';

import { makeModifiersRepository } from '@/infra/repositories';

type Params = { key: string };

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<Params> },
) {
  try {
    const { key } = await params;

    const condition = await makeModifiersRepository().findByKey(key);

    return NextResponse.json(condition);
  } catch (error) {
    console.error(error);
    const message =
      error instanceof Error ? error.message : 'Internal server error';

    return new NextResponse(message, { status: 500 });
  }
}
