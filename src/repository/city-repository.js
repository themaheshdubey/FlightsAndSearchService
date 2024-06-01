const { City } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository {

    async createCity({name}) {
        try {
            const city = await City.create({
                name: name
            });
            return city;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where : {
                    id : cityId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }

    async updateCity(cityId , data) {
        try {

            //The below approach also works well but will not return updated object
            //if we are using pgsql then returning:true can be used.
            // const city = await City.update(data ,  {
            //     where : {
            //         id: cityId
            //     }
            // });
            // return city;

            //for returning updated value as well in mysql below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }

    async getAllCities(filter) {
        try {

            if(filter.name) {//if we need to return all city according to user requirement
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }

            const cities = await City.findAll();
            return cities;
            
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

}

module.exports = CityRepository;