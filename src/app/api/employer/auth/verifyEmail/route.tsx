import { transporter } from "@/lib/config/mailer";
import { emailExists, rediServices } from "@/services/employer/auth/verifyEmailServices";
import { generateOtp } from "@/util/generateOtp";
import { hashPassword } from "@/util/hashPassword";
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
       
        const existingUserEmail = await emailExists(email);
        if(existingUserEmail){
            return NextResponse.json({mesage:"Email already registered!, please try another one "},
                {status:400}
            )
        }

        const otp =  generateOtp()
        const hashedPassword = await hashPassword(password)
        
        const tempUser = {
          firstName,
          lastName,
          position,
          email,
          contact,
          password: hashedPassword,
          otp,
        }

        await rediServices.saveTempUser(email,tempUser);
        
        await transporter.sendMail({
            from: "Pt_finder",
            to: email,
            subject: "Verify your email OTP!",
            html: `<p>Hello <b>${firstName}</b>,</p>
             <p>Your OTP code is: <b>${otp}</b></p>
             <p>This code expires in 5 minutes.</p>`
        })

        return NextResponse.json({message:"otp send to your email",otp: otp},
            {status:201}
        )
        
    } catch (error:any) {
      let message = "Something went wrong";
    if (error instanceof Error) message = error.message;
    return NextResponse.json({ success: false, message }, { status: 500 });
    }
}