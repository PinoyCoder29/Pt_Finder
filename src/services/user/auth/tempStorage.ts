import {redis} from "@/lib/config/redis"

export const redisServices = {
    
    async saveTempUser(email: string, data: any){
        await redis.set(`temp_user:${email}`,JSON.stringify(data),{ex:300})
    }
}