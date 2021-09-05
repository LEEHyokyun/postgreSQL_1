const express = require('express')
const router = express.Router()

const db = require('../config/database')
const Model = require('../models/Model')

//WE CAN route url request in detail from application level.
//This router is for formatting more route path and request from router level.
router.get('/', (req, res) => {
    //res.send('THIS IS entities')
    Model.findAll()
    .then(list=>{
        console.log(list)
        res.sendStatus(200)
    })
    .catch(err => console.error('ERROR FOUND : ', err))
})

//DATA ADD
router.get('/add', (req, res) => {
    //data add(by get request)
    const data = {
        title: 'WANTED FOR CPP DEVELOPER',
        technologies: 'REACT, JAVA, JAVA SCRIPT',
        budget: '$90000',
        description: 'SPECIFIC COMPANY A',
        contact_email: 'COMPANY_A@gmail.com'
    }


//destructuring
let {title, technologies, budget, description, contact_email} = data

//ADD data to table information
Model.create({
    title: title,
    technologies: technologies,
    budget: budget,
    description: description,
    contact_email: contact_email
})
.then(list => res.redirect('/tables'))
.catch(err=>console.error('ERROR FOUND ', err))

})



module.exports = router