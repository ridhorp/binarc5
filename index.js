const express = require('express')
const app = express()

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/games', (req, res) => {
    res.render('games')
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