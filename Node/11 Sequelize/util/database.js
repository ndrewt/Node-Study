const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-study','root','1010',
{dialect: 'mysql',
host:'localhost'})

module.exports = sequelize