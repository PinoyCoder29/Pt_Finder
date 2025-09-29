import { redis } from "@/lib/config/redis";
import { createUser } from "@/services/user/auth/verifyEmail";  
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let { email, otp } = body;

    // 1. Validate request
    if (!email || !otp) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // 2. Convert email to lowercase for consistency
    email = email.toLowerCase();

    // 3. Kunin temp user sa Redis
    const tempUserData = await redis.get(`tempUser:${email}`);
    if (!tempUserData) {
      return NextResponse.json(
        { success: false, message: "User data expired or not found" },
        { status: 400 }
      );
    }

    // 4. Sa bagong Redis client, maaaring object na agad ang data
    const tempUser =
      typeof tempUserData === "string" ? JSON.parse(tempUserData) : tempUserData;

    // 5. Check OTP
    if (tempUser.otp !== otp) {
      return NextResponse.json(
        { success: false, message: "Invalid OTP" },
        { status: 400 }
      );
    }

    // 6. Insert user sa Prisma DB
    const result = await createUser({
      firstName: tempUser.firstName,
      lastName: tempUser.lastName,
      birthDate: new Date(tempUser.birthDate),
      gender: tempUser.gender,
      email: tempUser.email.toLowerCase(), // ensure consistent
      password: tempUser.password, // hashed na dapat ito
    });

    // 7. Delete temp data sa Redis
    await redis.del(`tempUser:${email}`);

    return NextResponse.json(
      { success: true, message: "User verified & created", user: result },
      { status: 201 }
    );
  } catch (error: any) {
    const message = error instanceof Error ? error.message : "Something went wrong";

    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
