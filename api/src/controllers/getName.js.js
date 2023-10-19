require('dotenv').config();
const { Dog, Temperament } = require("../db");
const axios = require("axios");
const { API_URL, API_KEY } = process.env;
const { getApi, getDataBase } = require("./getApi")


const getName = async(req, res) => {
    try {
        // DB
        let dogDB = await Dog.findAll({
            
            include: {
                model: Temperament,
                attributes: ["name"],
                through: {                    
                    attributes: [],   
                },
            },
        });
        const newDogDB = await getDataBase(dogDB)
        
        // API
        const dataApi = (await axios.get(`${API_URL}?api_key=${API_KEY}`)).data;
        const dogApi = await getApi(dataApi)

        
        const concatInformation =newDogDB.concat(dogApi);
        

        //**  NAME
        const { name } = req.query;
        if (name) {
            const searchDog = concatInformation.filter((dog) =>
                dog.name.toLowerCase().includes(name.toLowerCase())
            );

            if (searchDog.length === 0) {
                return res.status(404).send(`No se ha encontrado ${name}`);
            }

            return res.status(200).json(searchDog);
        }

        return res.status(200).json(concatInformation)
        
    } catch (error) {
        console.log(error);
        return res.status(400).send(error)
    }
}

module.exports = {
    getName

}