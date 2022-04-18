const express = require('express')
const app = express()
let users = require('./db/users.json')

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/games', (req, res) => {
    res.render('games')
})

app.post('/api/v1/login', (req, res) => {
    const { username, password } = req.body
    let user = users.find(i => i.username == username)
    let resJson

    if (user == 'undefined') {
        resJson = {
            status: "login fail",
            message: "user not found"
        }
    } else if (user.password == password) {
        resJson = {
            status: "succes",
            message: "login succes"
        }
    } else if (user.password != password) {
        resJson = {
            status: "login fail",
            message: "wrong password"
        }
    }

    res.status(200).send(resJson)
})

app.get('/api/v1/users', (req, res) => {
    res.status(200).send(users)
})

app.get('/api/v1/users/:id', (req, res) => {
    const user = users.find(i => i.id == req.params.id)
    res.status(200).send(user)
})

app.use((error, req, res, next) => {
    res.status(500).json({
        status: "fail",
        "message": error.message
    })
})

app.use((req, res, next) => {
    res.status(404).json({
        status: "fail",
        message: "not found"
    })
})

app.listen(3000, () => {
    console.log('server is running')
})