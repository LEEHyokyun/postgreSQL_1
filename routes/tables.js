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
        //console.log(list)
        res.render('list', {
            list: list
        })
    })
    .catch(err => console.error('ERROR FOUND : ', err))
})

//post request by ADD is on /tables/add url.
router.get('/add', (req,res)=> res.render('add'))

//DATA ADD by post request
router.post('/add', (req, res) => {

//could parse data by post by bodyparser configuration in app.js
//destructuring data
let {title, technologies, budget, description, contact_email} = req.body

//server side logic
//not adding required on input attribute,
//but log errors and inform clients to write values.
let errors = []

//Validate fields in server side
if(!title){
    errors.push({text: 'Please add title'})
}
if(!technologies){
    errors.push({text: 'Please add technologies'})
}
if(!description){
    errors.push({text: 'Please add description'})
}
if(!contact_email){
    errors.push({text: 'Please add contact_email'})
}

//seperate logic if errors occur or not.
if(errors.length > 0){
    //if anything issued
    res.render('add', {
        errors,
        title,
        technologies,
        budget,
        description,
        contact_email
    })
}else{
    //budget variable would be given with dollar sign.
    //and budget is not required, also it would be controlled.
    if(!budget){
        budget = 'UNKNOWN'
    }else{
        budget = `$${budget}`
    }

    //technologies variable would be given with lowercase
    //and space after comma is going to be removed.
    technologies = technologies.toLowerCase().replace(/, /g, ',')

    //not any issues
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
}

})



module.exports = router