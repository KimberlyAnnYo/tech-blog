const Sequelize = require('sequelize');
mysql://p26qwiv1fp1sjbyz:if7oivepcocsp2mo@qz8si2yulh3i7gl3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/toob3wiusha8mgt7



require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, 'root', process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;