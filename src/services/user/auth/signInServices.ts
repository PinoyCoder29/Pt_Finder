import {prisma} from "@/lib/config/prisma"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export async function verifyEmail(email:string,password:string) {
    try {
        const user = await prisma.user.findFirst({
            where: {email},
        });
        if(!user){
            return {success:false,message:"USER_NOT_FOUND"}
        }
        const isvalid = await bcrypt.compare(password, user.password);
        if(!isvalid){
            return {success: false, message: "INVALID_PASSWORD"}
        }
        
        const token = jwt.sign(
        { userId: user.id, email: user.email }, // The payload contains userid and username
        process.env.JWT_SECRET as string,
        { expiresIn: "1h"}
        );
        return{
            success:true,
            message: "LOGIN_SUCCESS",
            token,
            user:{
                id:user.id,
                email: user.email
            }
        }
    } catch (error) {
        console.error(error);
        return{success:false,message:"SERVER_ERROR"}
    }
    
}