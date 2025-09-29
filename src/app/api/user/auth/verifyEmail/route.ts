import { transporter } from "@/lib/config/mailer";
import { redisServices, TempUser } from "@/services/user/auth/tempStorage";
import { generateOtp } from "@/util/generateOtp";
import { hashPassword } from "@/util/hashPassword";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, birthDate, gender, email, password } = body;

    // Validation
    if (!firstName || !lastName || !birthDate || !gender || !email || !password) {
      return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
    }
    if (password.length < 8) {
      return NextResponse.json({ success: false, message: "Password must be at least 8 characters" }, { status: 400 });
    }

    const otp = generateOtp();
    const hashedPassword = await hashPassword(password);

    // Save user temporarily in Redis
    const tempUser: TempUser =
     { firstName,
        lastName,
        birthDate,
        gender,
        email,
        password: hashedPassword,
        otp };
    await redisServices.saveTempUser(email, tempUser);

    // Send OTP email
    await transporter.sendMail({
      from: "Pt_Finder",
      to: email,
      subject: "Verify your email OTP",
      html: `<p>Hello <b>${firstName}</b>,</p>
             <p>Your OTP code is: <b>${otp}</b></p>
             <p>This code expires in 5 minutes.</p>`,
    });

    return NextResponse.json({ success: true, message: "OTP sent to your email",otp:otp }, { status: 201 });
  } catch (error: unknown) {
    let message = "Something went wrong";
    if (error instanceof Error) message = error.message;
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
