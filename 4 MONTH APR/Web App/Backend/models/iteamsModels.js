const mongoose = require('mongoose') 


const iteamsSchema = new mongoose.Schema({
    
    name: String,
    decription: String,
    sellingPrice: Number,
    purchasePrice: Number,
    quantity: Number,
    unit: String
})

const Iteams = mongoose.model("Iteams", iteamsSchema)

module.exports = Iteams