import { redis } from "@/lib/config/redis"
import {prisma} from "@/lib/config/prisma"
export async function getRedisData(key:string){
    return await redis.get(key)
}

export async function createUser(data:{
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    contact: string;
    password: string;
}) {
  try {
    const user = await prisma.employer.create({
       data:{
        firstName: data.firstName,
        lastName: data.lastName,
        position:data.position,
        email: data.email,
        contact: data.contact,
        password: data.password
       }
    })
    return user
  } catch (error) {
  console.error("error creating user :", error) 
  throw error   
  }
}