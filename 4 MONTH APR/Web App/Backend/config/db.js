const mongoose = require('mongoose') 

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URL,)
            .then(() => console.log("Mongo DB Connected"))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDB }