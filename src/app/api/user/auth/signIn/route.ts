import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { success: false, message: "All fields are required!" },
                { status: 400 }
            );
        }

        // TODO: Add your actual sign-in logic here
        // Example: validate email/password against database

        return NextResponse.json(
            { success: true, message: "Signed in successfully" },
            { status: 200 }
        );

    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
