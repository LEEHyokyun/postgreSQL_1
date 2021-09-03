const express = require('express')
const router = express.Router()

const db = require('../config/database')
const Model = require('../models/Model')


router.get('/', (req, res) => {
    //res.send('THIS IS entities')
    Model.findAll()
    .then(list=>{
        console.log(list)
        res.sendStatus(200)
    })
    .catch(err => console.error('ERROR FOUND : ', err))
})

module.exports = router