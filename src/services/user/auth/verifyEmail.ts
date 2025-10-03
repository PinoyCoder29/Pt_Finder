import { prisma } from "@/lib/config/prisma";

export async function createUser(data: {
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: string;
  email: string;
  password: string;
}) {
  // check if user already exists
  const existingUser = await prisma.user.findFirst({
    where: { email: data.email },
  });

  if (existingUser) {
    return { exists: true, user: existingUser };
  }

  // if not exists, create new user
  const newUser = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      birthDate: data.birthDate,
      gender: data.gender,
      email: data.email,
      password: data.password, // ⚠️ dapat naka-hash sa real app
    },
  });

  return { exists: false, user: newUser };
}
