const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool ({
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: process.env.DBPORT,
  user: process.env.USER,
  password: process.env.DBPASSWORD
})

