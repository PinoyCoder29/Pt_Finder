import {prisma} from "@/lib/config/prisma"
export async function emailExists(email:string) {
   const employer = await prisma.employer.findFirst({
      where: {email},
   })
   return employer;
}