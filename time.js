const express = require('express')
const router = express.Router()

const app = express()
const port = 3333

const showTime = (request, response) => {
    const date = new Date()
    const time = date.toLocaleTimeString('pt-BR')

    response.send(time)
}

const showPort = () => {
    const message = `Server created and running on port ${port}`
    console.log(message)
}

app.use(router.get('/time', showTime))
app.listen(port, showPort)