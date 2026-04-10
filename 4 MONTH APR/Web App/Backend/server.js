require('dotenv').config() // 
console.log(process.env.PORT, "===>") 

const express = require('express') 

const app = express() 

const cors = require('cors') 
const { connectDB } = require('./config/db')  
const { addIteam, editIteam, deleteIteam, getAllIteam } = require('./controllers/IteamsControllers')                                                                                                                                                                                                                                                                                                                                                                                      
const { login, register } = require('./controllers/authController')
const { getDashboardCount } = require('./controllers/dashboardController')

app.use(express.json()) 
app.use(cors()) 
connectDB()

app.post("/api/login", login)
app.post("/api/register", register)

app.post("/api/create-item", addIteam )
app.put("/api/update-item", editIteam )
app.delete("/api/delete-item/:id", deleteIteam )
app.get("/api/get-all-item", getAllIteam )

app.get("/api/get-dashboard", getDashboardCount)

app.get("/helth", (req, res) => {

    res.status(200).json({
        message: "Server is Runing"
    })

})

const PORT = process.env.PORT || 1010
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

})


