const express = require('express')
const router = express.Router()


const app = express()
const port = 3333

const showHello = (request, response) => {
    response.send('Hello, World!')
}

const showPort = () => {
    const message = `Server created and running on port ${port}`
    console.log(message)
}

app.use(router.get('/hello', showHello))
app.listen(port, showPort)