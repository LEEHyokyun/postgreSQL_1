const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

const db = require('./config/database')


db.authenticate()
.then(()=>console.log('Database connected successfully'))
.catch(error => console.error('ERROR FOUND ', error))
    
const app = express()
const PORT = process.env.PORT || 5000

//set middleware before url request
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=> {
    res.send('INDEX')
})

//WE CAN route url request in detail from application level.
app.use('/tables', require('./routes/tables'))

app.listen(PORT, console.log(`SERVER ON ${PORT}`))
