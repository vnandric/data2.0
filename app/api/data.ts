"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
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
      orderBy: {
        id: "desc",
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

export async function getWeather() {
  const weather = await fetch(`${process.env.OPENWEATHER_URL}`, {
    cache: "no-store",
  });

  if (!weather.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return weather.json();
}

export async function getLastpass() {
  const lastpass = await fetch(`${process.env.LOCALHOST8080}/lastpass`, {
    cache: "no-store",
  });

  if (!lastpass.ok) {
    throw new Error("Failed to fetch lastpass data");
  }

  return lastpass.json();
}
