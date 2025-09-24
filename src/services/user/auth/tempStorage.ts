import {redis} from "@/lib/config/redis"

export type TempUser = {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  email: string;
  password: string; // hashed password
  otp: string;
};

export const redisServices = {
  async saveTempUser(email: string, data: TempUser) {
    await redis.set(`temp_user:${email}`, JSON.stringify(data), { ex: 300 }); // 5 min
  }
}