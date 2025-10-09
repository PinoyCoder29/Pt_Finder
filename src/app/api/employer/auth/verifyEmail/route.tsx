import { emailExists } from "@/services/employer/auth/verifyEmailServices";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const body = await req.json();
        
        const {firstName,lastName,position,email,contact,password} = body
        
        if(!firstName || !lastName ||  !position ||  !email ||  !contact ||  !password ){
            return NextResponse.json({success:false,message:"all fields are required!"},
                {status:400}
            )
        }
       
        const user = await emailExists(email);
        
        
        
    } catch (error) {
      
    }


}