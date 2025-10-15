import {prisma} from "@/lib/config/prisma"
import {redis} from "@/lib/config/redis"
export async function emailExists(email:string) {
   const employer = await prisma.employer.findFirst({
      where: {email},
   })
   return employer;
}
// for TemporaryStorage
export type tempUser = {
   firstName: string;
   lastName: string;
   position: string;
   email: string;
   contact: string;
   password: string;
}

export const rediServices = {
    async saveTempUser(email:string, data:tempUser){
      await redis.set(`EmployerTempUser:${email.trim().toLocaleLowerCase()}`,JSON.stringify(data),{ex:300});  
    }
}