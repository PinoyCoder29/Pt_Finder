import {prisma} from "@/lib/config/prisma"
export async function emailExists(email:string) {
    const user = await prisma.user.findFirst({
        where: {email},
    })
    if(!user){
        return({sucess:false,message:"USER_NOT_FOUND"})
    }
}

