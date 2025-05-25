const mysql = require("mysql2/promise");
require("dotenv").config();

// make .env file with MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "car_rental",
});

const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Database connected successfully");
    connection.release();
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    throw error;
  }
};

module.exports = {
  pool,
  testConnection,
};
