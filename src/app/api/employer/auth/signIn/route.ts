import { emailExists } from "@/services/employer/auth/signInServices";
import { comparePassword } from "@/util/hashPassword";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
export async function POST(req: NextResponse){
    try {
        const body = await req.json()
    const {email,password} = body
    if(!email || !password){
        return NextResponse.json({success:false, message:"all fields are required!"},
            {status:400}
        )
    }
    const employerData = await emailExists(email)
    if(!employerData){
        return NextResponse.json({success:false,message: "Email not found"},
            {status:400}
        )  
    }

    const isMatch = await comparePassword(password,employerData.password)
    if(!isMatch){
        return NextResponse.json({sucess:false,message:"Invalid password"},
            {status:400}
        )
    }
    const token = jwt.sign({ id:employerData.id },process.env.JWT_SECRET as string, {
 expiresIn: '1d',
 });
    return NextResponse.json({success:true,message:"Login successfull",token,result: employerData},
        {status:201}
    );
    } catch (error) {
        return NextResponse.json({success:false,message:error || "server error"},
            {status:400}
        )
    }
}