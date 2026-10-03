import mongoose from "mongoose";
import {Schema,model} from "mongoose"
import { env } from "node:process";


let connectionPromise: Promise<typeof mongoose> | undefined;

export function connectDatabase() {
    if (mongoose.connection.readyState === 1) {
        return Promise.resolve(mongoose);
    }

    if (!connectionPromise) {
        const mongoUri = env.MONGODB_URI;
        if (!mongoUri) {
            return Promise.reject(new Error("MONGODB_URI must be configured."));
        }

        connectionPromise = mongoose.connect(mongoUri).catch((error: unknown) => {
            connectionPromise = undefined;
            throw error;
        });
    }

    return connectionPromise;
}

const userSchema=new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    sharelink:{type:String}
})

const contentSchema=new Schema({
    title:{type:String,required:true},
    link:{type:String,required:true},
    tag:{type:String},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"}}
)

export const User=mongoose.model("User",userSchema)

export const Content=mongoose.model("Content",contentSchema)

