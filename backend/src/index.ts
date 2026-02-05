import express from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { Contentmodel, Usermodel } from "./db.js"
import { usemiddleware } from "./middleware.js"
import cors from "cors";



const app = express()

app.use(express.json())
app.use(cors());

const JWT_SECRET = "!23123";

app.post("/api/v1/signup" , async (req , res) =>{
const username = req.body.username;
const password = req.body.password; 

await Usermodel.create({
    username : username,
    password : password 
})

res.json({
    message:"you have signed up"
})

})

app.post("/api/v1/signin" , async (req , res) =>{

    const username = req.body.username;
    const password = req.body.password;

   const existingUser = await Usermodel.findOne({
        username,password
    })

    if(existingUser){
const token = jwt.sign({id:existingUser._id} , JWT_SECRET)
res.json({
    "your token" : token
})
    }
    else{
        return res.json({
            "message" :"not found"
        })
    }

})

app.post("/api/v1/content", usemiddleware , async (req ,res , next)=>{
const title = req.body.title 
const link = req.body.Link

 await  Contentmodel.create({
    link, 
    title,
    //@ts-ignore
    userID:req.userId,
    tags :[]
})


return res.json({
    message : "content added"
})
})

app.get("/api/v1/content" , usemiddleware,  async (req , res)=>{
    //@ts-ignore
const userId = req.userId
const content = await Contentmodel.find({
    userID : userId
})

res.json({
    content
})

})

app.delete("/api/v1/content" , (req , res)=>{

})

app.post("/api/v1/brain/share" , (req , res )=>{

} )

app.get("/api/v1/brain/:sharelink" , (req, res) =>{
    
})

app.listen(3000)