import mongoose from "mongoose";
import { Schema, model } from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/brainly");
const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    sharelink: { type: String }
});
const contentSchema = new Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    tag: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});
export const User = mongoose.model("User", userSchema);
export const Content = mongoose.model("Content", contentSchema);
//# sourceMappingURL=db.js.map