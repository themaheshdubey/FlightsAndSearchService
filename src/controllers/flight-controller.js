const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async(req,res) => {
    try {
       const response =  await flightService.createFlight(req.body);
       return res.status(201).json({
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
        return res.status(200).json({
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
        return res.status(200).json({
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