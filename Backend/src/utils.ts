import { env } from "node:process";

const secretKey = env.JWT_SECRET;
if (!secretKey) {
    throw new Error("JWT_SECRET must be configured.");
}

export const Secretkey = secretKey;
export const randomString=(length:number)=>{
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
}