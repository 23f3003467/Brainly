import express from "express";
import jwt from "jsonwebtoken";
import { User, Content, connectDatabase} from "./db.js";
import bcrypt from "bcrypt";
import { verifyToken } from "./Usermiddleware.js";
import {randomString,Secretkey} from "./utils.js"
import cors from "cors"
import { env } from "node:process";
// import 
declare global {
    namespace Express {
        interface Request {
            userid?: string;
        }
    }
}
const app = express();

app.use(express.json());
app.use(cors())
app.use(async (_req, _res, next) => {
  try {
    await connectDatabase();
    next();
  } catch (error) {
    next(error);
  }
});
// routes

app.post("/api/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  console.log(username, password);
  let user =await User.findOne({ username });

  
  if(user==null){
    console.log(username, password);
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });
    res.status(200).json({ message: "USER created successfully" });
  }
  else{
    console.log("exist already")
    return res.status(409).json({message:"Teri maa ka chut user already exist"})
  }
});

app.post("/api/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  console.log(username, password,"NAya code");
  let user =await User.findOne({ username });
  if(user==null){
    res.status(401).json({ message: "Invalid Username credentials" });
    return;
  }
  const matched= await bcrypt.compare(password,user.password)
  if(matched){
    jwt.sign({ username, id: user._id }, Secretkey, (err:any, token:any) => {
      if (err) {
        console.error("JWT signing error:", err);
        res.status(500).json({ message: "Error signing token", error: err.message });
      } else {
        console.log("Token generated successfully new:", token);
        res.status(200).json({ message: "signin route", token });
      }
    });
  }
  else{
    res.status(401).json({ message: "Invalid Password credentials" });
  }
});

app.get("/api/content", verifyToken, async (req, res) => {
  if (!req.userid) {
    return res.status(401).json({ message: "Unauthorized" });
}

const content = await Content.find({
    userId: req.userid
});
  // let content= await Content.find({Userid:req.userid})
  res.status(200).json({ message: "content route", content });
});

app.post("/api/content/add", verifyToken, async (req, res) => {
  const { title, link, tag } = req.body;
  const content = await Content.create({ title, link, tag, userId: req.userid ? req.userid : "1" });
  res.status(200).json({ message: "content added", content });
});

app.delete("/api/content/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  await Content.findByIdAndDelete(id);
  res.status(200).json({ message: "content deleted" });
});

app.post("/api/brain/share",verifyToken, async (req, res) => {
  const sharelink = randomString(10);
  const Userid=req.userid
  await User.findByIdAndUpdate(Userid,{sharelink})
  
  res.status(200).json({ message: "share route", sharelink });
});

app.get("/api/brain/:sharelink", async (req, res) => {
  const { sharelink } = req.params;
  const user=await User.findOne({ sharelink })
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  const content=await Content.find({Userid:user?._id})

  res.status(200).json({ message: "Brain content readonly", content });
});

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Request failed:", error);
  res.status(500).json({ message: "Internal server error" });
});

export default app;

if (!env.VERCEL) {
  const port = Number(env.PORT ?? 3000);
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}










