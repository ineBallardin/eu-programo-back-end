const express = require('express')
const router = express.Router()

const app = express()
const port = 3333

const women = [{
    nome: 'Karine Ballardin',
    imagem: 'https://avatars.githubusercontent.com/u/94572373?v=4',
    minibio: 'Tech Community Manager'
},
{
    nome: 'Nina da Hora',
    imagem: 'https://bit.ly/3FKpFaz',
    minibio: 'Hacker antirracista'
},
{
    nome: 'Iana Chan',
    imagem: 'https://bit.ly/3JCXBqP',
    minibio: 'Fundadora da PrograMaria'
}]

const showWomen = (request, response) => {
    response.json(women)
}

const showPort = () => {
    const message = `Server created and running on port ${port}`
    console.log(message)
}

app.use(router.get('/women', showWomen))
app.listen(port, showPort)