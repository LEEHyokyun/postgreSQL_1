const {Sequelize} = require('sequelize')

module.exports = new Sequelize('db_hyokyun_1', 'postgres', 'tntjdrh30929', {
    host: 'localhost',
    dialect: 'postgres'
});