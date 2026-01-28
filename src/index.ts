import express from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { Usermodel } from "./db.js"


const app = express()

app.use(express.json())

const JWT_PASSWORD = "!23123";

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
const token = jwt.sign({id:existingUser._id} , JWT_PASSWORD)
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

app.post("/api/v1/content", (req ,res)=>{

})

app.get("/api/v1/content" , (req , res)=>{

})

app.delete("/api/v1/content" , (req , res)=>{

})

app.post("/api/v1/brain/share" , (req , res )=>{

} )

app.get("/api/v1/brain/:sharelink" , (req, res) =>{
    
})

app.listen(3000)