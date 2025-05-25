const express = require("express");
const router = express.Router();
const {getAllCars} = require("../controllers/carsController");

// GET all cars
router.get("/", getAllCars);

module.exports = router;
