import bcrypt from "bcryptjs"
export async function hashPassword(password:string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt)
}

export async function comparePassword(plainPassword:string,hashedPassword:string){
    return await bcrypt.compare(plainPassword,hashedPassword)
}