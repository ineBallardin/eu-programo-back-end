const express = require('express')
const router = express.Router()
const cors = require('cors')

const connectDB = require('./DB')
connectDB()

const Woman = require('./womanModel')

const app = express()
app.use(express.json())
app.use(cors())

const port = 3333


const showWomen = async (request, response) => {
    try {
       const dbWomen = await Woman.find()

       response.json(dbWomen)
    } catch(error) {
        console.error(error)
    }
    response.json(Woman)
}

const createWoman = async (request, response) => {
    const newWoman = new Woman({
        name: request.body.name,
        image: request.body.image,
        minibio: request.body.minibio,
        quote: request.body.quote
    })

    try{
        const createdWoman = await newWoman.save()
        response.status(201).json(createdWoman)
    } catch(error){
        console.error(error)
    }

}

const editWoman = async (request, response) => {
    try {
        const womanFound = await Woman.findById(request.params.id)

        if (request.body.name) {
            womanFound.name = request.body.name
        }
        
        if (request.body.image) {
            womanFound.image = request.body.image
        }
        
        if (request.body.minibio) {
            womanFound.minibio = request.body.minibio
        }

        if (request.body.quote) {
            womanFound.quote = request.body.quote
        }
        
        const updatedDBWoman = await womanFound.save()
        response.json(updatedDBWoman)

    } catch(error) {
        console.error(error)
    }
}

const deleteWoman = async (request, response) => {
    try {
        await Woman.findByIdAndDelete(request.params.id)
        response.json({ message: 'Woman succefully deleted' })

    } catch(error) {
        console.error(error)
    }
}

app.use(router.get('/women', showWomen))
app.use(router.post('/women', createWoman))
app.use(router.patch('/women/:id', editWoman))
app.use(router.delete('/women/:id', deleteWoman))


const showPort = () => {
    const message = `Server created and running on port ${port}`
    console.log(message)
}
app.listen(port, showPort)