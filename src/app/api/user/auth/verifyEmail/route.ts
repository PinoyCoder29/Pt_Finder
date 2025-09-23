import { transporter } from "@/lib/config/mailer";
import { redisServices } from "@/services/user/auth/tempStorage";
import { generateOtp } from "@/util/generateOtp";
import { hashPassword } from "@/util/hashPassword";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        const body = await req.json()

        const{firstName, lastName, birthDate, gender, email, password} = body

        if(!firstName|| !lastName|| !birthDate|| !gender|| !email|| !password){
            return NextResponse.json({success:false,message:'all fields are required!'},
                {status:400}
            )
        }
        
        if(password.length < 8){
            return NextResponse.json({success:false,message:'password must be at 8 character'},
                {status:400}
            )
        }
       const otp = generateOtp()
       const hashedPassword = await hashPassword(password)
       

       await redisServices.saveTempUser(email,{
        firstName,
        lastName,
        birthDate,
        gender,
        email,
        password:hashedPassword,
       })

       await transporter.sendMail({
        from: `Pt_Finder`,
        to:email,
        subject:`Verify your email Otp`,
        html: `<p>Hello <b>${firstName}</b>,</p>
             <p>Your OTP code is: <b>${otp}</b></p>
             <p>This code expires in 5 minutes.</p>`,
       })
       return NextResponse.json({success:true,message:'otp send to your email',otp:otp},
        {status:201 }
       )
    } catch (error: any) {
           return NextResponse.json({ success: false, message:error.message}, { status: 500 });
    }
}