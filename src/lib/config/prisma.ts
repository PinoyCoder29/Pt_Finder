import { PrismaClient } from "@prisma/client";

declare global {
  // para hindi mag-create ng multiple PrismaClient instances
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
