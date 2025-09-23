import bcrypt from "bcryptjs"
export async function hashPassword(pasword:string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(pasword, salt)
}