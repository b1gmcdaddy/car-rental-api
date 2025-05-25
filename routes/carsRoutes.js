const express = require("express");
const router = express.Router();
const {getAllCars} = require("../controllers/carsController");

// GET all cars
router.get("/", getAllCars);

// POST requests
// sample: router.post("/", createCar);

// PUT requests
// sample: router.put("/:id", updateCar);

// DELETE requests
// sample: router.delete("/:id", deleteCar);

module.exports = router;
