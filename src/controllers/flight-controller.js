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

module.exports = {
    create
}