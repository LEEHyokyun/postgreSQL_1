const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res)=> {
    res.send('INDEX')
})
app.listen(PORT, console.log(`SERVER ON ${PORT}`))