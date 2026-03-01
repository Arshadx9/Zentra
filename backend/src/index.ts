import express from "express"
import jwt from "jsonwebtoken"
import { Contentmodel, Uploadmodel, Usermodel } from "./db.js"
import { usemiddleware } from "./middleware.js"
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import { processPdf } from "./processpdf.js"
import dotenv from "dotenv"
dotenv.config()
import { embedandstore } from "./embed&store.js";
import { queryPdf } from "./query.js"
const app = express()

app.use(express.json())
app.use(cors());

const JWT_SECRET = "!23123";

app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Usermodel.create({
        username: username,
        password: password
    })

    res.json({
        message: "you have signed up"
    })
})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await Usermodel.findOne({
        username, password
    })

    if (existingUser) {
        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET)
        res.json({
            "your token": token
        })
    } else {
        return res.json({
            "message": "not found"
        })
    }
})

app.post("/api/v1/content", usemiddleware, async (req, res, next) => {
    const title = req.body.title
    const link = req.body.link

    await Contentmodel.create({
        link,
        title,
        //@ts-ignore
        userID: req.userId,
        tags: []
    })

    return res.json({
        message: "content added"
    })
})

app.get("/api/v1/content", usemiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId
    const content = await Contentmodel.find({
        userID: userId
    })

    res.json({
        content
    })
})

const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (file.mimetype === "application/pdf") {
        cb(null, true)
    } else {
        cb(new Error("only PDFs allowed"))
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadFolder = "uploads/"
        if (!fs.existsSync(uploadFolder)) {
            fs.mkdirSync(uploadFolder)
        }
        cb(null, uploadFolder)
    },
    filename: (req, file, cb) => {
        const uniqueName = crypto.randomUUID() + path.extname(file.originalname)
        cb(null, uniqueName)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 }
})

app.post("/upload", usemiddleware, upload.single("pdf"), async (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: "no file received" })
        return
    }

    const filepath = `uploads/${req.file.filename}`
    const chunks = await processPdf(filepath)
    await embedandstore(chunks)

    await Uploadmodel.create({
        filename: req.file.filename,
        Originalname: req.file.originalname,
        //@ts-ignore
        userId: req.userId
    })

    res.json({
        success: true,
        filename: req.file.filename,
        totalChunks: chunks.length
    })
})

app.get("/uploads", usemiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId
    const uploads = await Uploadmodel.find({ userId })
    res.json({ uploads })
})

app.post("/ask", usemiddleware, async (req, res) => {
    const question = req.body.question

    if (!question) {
        res.status(400).json({ message: "no question provided" })
        return
    }

    const answer = await queryPdf(question)

    res.json({ answer })
})

app.listen(3001)