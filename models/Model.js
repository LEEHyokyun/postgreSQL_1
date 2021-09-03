const Sequelize = require('sequelize')
const db = require('../config/database')

const entities = db.define('hyokyun_1', {
    title: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    }
})

module.exports = entities