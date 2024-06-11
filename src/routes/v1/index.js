const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

router.post('/city' , CityController.create);
router.delete('/city/:id' , CityController.destroy);
router.get('/city/:id' , CityController.get);
router.get('/city' , CityController.getAll);//fetches all city name
router.patch('/city/:id' , CityController.update);



router.post('/flights' , FlightController.create);//creates a new flight
router.get('/flights/:id' , FlightController.getFlight);//fetch a flight
router.get('/flights' , FlightController.getAllFlight);//fetch all flight according to filter

module.exports = router;
