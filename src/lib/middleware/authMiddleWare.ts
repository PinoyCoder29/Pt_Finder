import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export function verifyToken(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Access denied" }, { status: 401 });
  }

  try {
    const token = authHeader.split(" ")[1]; // usually "Bearer <token>"
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };

    // Instead of req.userId, return decoded
    return decoded;
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
