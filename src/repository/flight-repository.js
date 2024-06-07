const { Flight } = require('../models/index');
const { Op } = require('sequelize');


class FlightRepository {

    async createFlight (data) {
        try {
            const response = await Flight.create(data);
            return response;
        } catch (error) {
            console.log("Something wrong at repository layer");
            throw {error};
        }
    }

}

module.exports = FlightRepository;