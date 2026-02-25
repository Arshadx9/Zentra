import mongoose , { model , Schema } from "mongoose";

mongoose.connect("mongodb+srv://Arshad:Arshadzeon@cluster0.wvtgoyf.mongodb.net/ragbrain")

const Username = new Schema ({
username :{ type :String , unique:true },
password : {type : String}

})

export const Usermodel = model ("User" , Username);

const ContentSchema = new Schema ({
    title : String , 
    link : String , 
    tags : [{type : mongoose.Types.ObjectId , ref:"tag"}],
    userID : [{
        type : mongoose.Types.ObjectId,
        ref : "User",


    }]
})


export const Contentmodel = model ("content" , ContentSchema ) 

const LinkSchema = new Schema ({
    hash : String , 
    userID : {
        type:mongoose.Types.ObjectId, 
        ref:"User",
        required:true,
        unique:true
    }
})

export const Linkmodel = model("links" , LinkSchema)

const UploadSchema = new Schema ({
filename : String,
Originalname : String , 
userId : mongoose.Schema.Types.ObjectId,
uploadedAt : {
    type :Date , 
    default : Date.now 
}

})

export const Uploadmodel = model("Upload" , UploadSchema)