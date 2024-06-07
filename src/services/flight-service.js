const {FlightRepository,AirplaneRepository} = require('../repository/index');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {

        try {
            
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