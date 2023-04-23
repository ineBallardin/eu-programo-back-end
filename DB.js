const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {

        console.log('Data Base conection has started')
    
        await mongoose.connect(process.env.MONGO_URL)
    
        console.log('Data base conection succeed')

    } catch(error) {
        console.log(error)
    }
}

module.exports = connectDB