require("dotenv").config();

const getAllCars = async (req, res) => {
  try {
    // connect to db and input query to get all cars here
    res.status(200).json();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllCars,
};
