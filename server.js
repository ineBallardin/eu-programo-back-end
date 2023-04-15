const express = require('express')

const app = express()
const port = 3333

const showPort = () => {
    const message = `Server created and running on port ${port}`
    console.log(message)
}

app.listen(port, showPort)