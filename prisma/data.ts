import { PrismaClient } from "@prisma/client";
// import { unstable_noStore as noStore } from 'next/cache';

const prisma = new PrismaClient();

export async function getUsers1() {
  // noStore();
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
      take: 10,
    });
    return users;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Database Error");
  }
}

export async function getUsers2() {
  // noStore();
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
    take: 100,
  });
  return users;
}

export async function getUsers3() {
  // noStore();
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  return users;
}
