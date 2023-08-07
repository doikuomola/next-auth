import connectToDb from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/user';

export async function POST(request: NextRequest) {
  const { email, name } = await request.json();

  try {
    await connectToDb();
    await User.create({ email, name });
    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Server error: ', error },
      { status: 500 }
    );
  }
}
