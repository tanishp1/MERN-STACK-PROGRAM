// Backend Project

//Node js
//Express js
//DB MongoDB

// API list

//  1. Create iteam - Get data value from frontend {iteam details} and store into DB

// 2. Update iteam - get iteam details from frontend which iteam we need to update

// 3. Delete iteam - get iteam details from frontend and on delete this record from database

// 4. get ALL Records - get ALL records from DB and show to UI frontend


console.log("hello node js started");

const express = require('express')
const app = express()
const monogoose = require('mongoose')

app.use(express.json())

monogoose.connect("mongodb://localhost:27017/iteam-database").then(() => console.log("Mongo DB Connected")).catch((error) => console.log("error"))

const iteamSchema = new monogoose.Schema({
    name: String,
    description : String,
    sellingPrice : Number,
})

const iteam = new monogoose.model("iteam", iteamSchema)

// API 1 Create API 
app.post("/api/create-iteam" , async (req , res) => {

    try {

        const { name , description , sellingPrice } = req.body

        const saveIteam = new iteam(
        {
            name,
            description,
            sellingPrice
        }
    )

        await saveIteam.save()

        res.status(201).json({ message : "Iteam Created" , data : saveIteam})
        
    } catch (error) {
        console.log(error)
    }
})

// API 2 Update API 
app.put("/api/update-iteam" , (req , res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})

// API 3 Delete API 
app.delete("/api/delete-iteam" , (req , res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})

// API 4 GetALL iteam
app.get("/api/get-all-iteam" , async (req , res) => {

    try {

        const iteams = await iteam.find()

        res.status(200).json({message : "Get all iteam list" , data : iteams})
        
    } catch (error) {
        console.log(error)
    }
})
// Helth API

app.get("/helth", (req , res) => {
    res.status(200).json({message : "Server is running"})
})

// Server Started

const PORT = 9090

app.listen(PORT ,() => {
    console.log('Server Started')
})

