import { verifyEmail } from "@/services/user/auth/signInServices";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const body = await req.json()

        const {email,password} = body
        if(!email || !password){
            return NextResponse.json({success:false,message:"all fields are required!"},
                {status:400}
            )
        }
        const result = await verifyEmail(email,password);

        if(!result.success){
            return NextResponse.json(result,{status:400})
        }
        return NextResponse.json(result,{status:200})
    } catch (error:any) {
            return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );

    }
}