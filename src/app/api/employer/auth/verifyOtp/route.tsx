import { createUser, getRedisData } from "@/services/employer/auth/verifyOtpServices";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
try {
    const body = await req.json()
    const {email,otp} = body

    if(!email || !otp){
        return NextResponse.json({success:false, message:"All fields are required!"},
            {status:400}
        )
    }
    
   const redisEmployerData = await getRedisData(`EmployerTempUser:${email}`)
   
   if(!redisEmployerData){
    return NextResponse.json({success:false,message:"User data expired or not found"},
        {status:400}
    )
   }
   
   // Safe handling for both string and object
   const redisEmployer = typeof redisEmployerData === "string" 
     ? JSON.parse(redisEmployerData) 
     : redisEmployerData;
     
   if(redisEmployer.otp !== otp){
    return NextResponse.json({success:false, message: "Invalid OTP"},
        {status:400}
    )
   }

   const result = await createUser({
    firstName: redisEmployer.firstName,
    lastName: redisEmployer.lastName,
    position: redisEmployer.position,
    email: redisEmployer.email,
    contact: redisEmployer.contact,
    password: redisEmployer.password
   })

   if (!result) {
     return NextResponse.json(
       { success: false, message: "Failed to create user" },
       { status: 500 }
     );
   }
   
   return NextResponse.json(
      { success: true, message: "User verified & created", user: result },
      { status: 201 }
    );
} catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong";

    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
}
}