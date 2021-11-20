const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const OrderItem = sequelize.define('orderItem',{
  id:{
    type : Sequelize.INTEGER,
    autoIncrement:true,
    allowsNull:false,
    primaryKey:true
  },

});

module.exports = OrderItem