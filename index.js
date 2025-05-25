const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {testConnection} = require("./db/config");
const carsRoutes = require("./routes/carsRoutes");

require("dotenv").config();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

const app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));

// api routes
app.use("/api/cars", carsRoutes);

// connect to ur db and start serever
const startServer = async () => {
  try {
    await testConnection();
    app.listen(3000, () => {
      console.log("server is running on port 3k");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
