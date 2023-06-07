import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  // Get the data from the request body
  const { firstName, lastName, email, avatar } = await request.json();
  
  try {
      // Use Prisma client to insert a new user in the database
      const newUser = await prisma.contact.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            avatar: avatar
        },
    });

      // Return the new user
      return NextResponse.json(newUser);
  } catch (error) {
      // If there's an error, return a custom JSON response
      console.error(error);
      return NextResponse.json({ error: true, message: error });
  }
}
