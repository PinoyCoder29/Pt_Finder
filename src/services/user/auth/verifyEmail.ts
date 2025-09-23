import {prisma} from "@/lib/config/prisma"

export async function createUser(data: {
    firstName:string;
    lastName:string;
    birthDate:Date;
    gender:string;
    email:string;
    password:string;
}) {
  const existingUser = await prisma.user.findUnique({
    where: {email:data.email}
  })
  if(existingUser){
    return {exists: true, user:existingUser};
  }
}
