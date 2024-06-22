const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {

        try {

            if(compareTime(data.arrivalTime , data.departureTime) == false) {
                throw {error: "departure time > arrival time"};
            }
            
            //get the airplane capacity
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);

            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity
            });

            return flight;

        } catch (error) {
            console.log("Something wrong at service layer");
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const response = await this.flightRepository.getFlight(flightId);
            return response;
        } catch (error) {
            console.log("Something wrong at service layer");
            throw {error};
        }
    }

    async getAllFlight(filter) {
        try {
            const response = await this.flightRepository.getAllFlight(filter);
            return response;
        } catch (error) {
            console.log("Something wrong at service layer");
            throw {error};
        }
    }

    async updateFlight(flightId, data) {
        try {
            const response = await this.flightRepository.updateFlights(flightId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }


}

module.exports = FlightService



/**
 * Data passed by controller in createFlight function will look like this  :
 * {
 * flightNumber: 
 * airplaneId:
 * departureAirportId:
 * arrivalAirportId:
 * arrivalTime:
 * departureTime:
 * price:
 * boardinggate:
 * }
 * totalSeat -> Will need to fetch from airplane table. will get from airplane repository.
 */