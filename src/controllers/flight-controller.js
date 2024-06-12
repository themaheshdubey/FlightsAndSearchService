const {FlightService} = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');


const flightService = new FlightService();

const create = async(req,res) => {
    try {

        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }//to avoid bulky req body send from client, dont pass unwanted data further to repo or service layer

       const response =  await flightService.createFlight(flightRequestData);
       return res.status(SuccessCodes.CREATED).json({
        data:response,
        success:true,
        err:{},
        message:'Successfully created a flight'
       })
    } catch (error) {
        console.log("Something wrong at controller layer");
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:'Not able to create a flight'
        })
    }
}

const getFlight = async(req , res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message:'Successfully fetched  a flight'
        })
    } catch (error) {
        console.log("Something wrong at controller layer");
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:'Not able to fetch a flight'
        })
    }
}

const getAllFlight = async(req , res) => {
    try {
        const response = await flightService.getAllFlight(req.query);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message:'Successfully fetched all flight according to filter'
        })
    } catch (error) {
        console.log("Something wrong at controller layer");
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:'Not able to fetch all flight'
        })
    }
}

module.exports = {
    create,
    getFlight,
    getAllFlight
}