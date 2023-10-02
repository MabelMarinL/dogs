const { Dog, Temperament } = require("../db");
const axios = require("axios");
require('dotenv').config();
const { API_URL, API_KEY } = process.env;
const { getApi,getDataBase } = require("./getApi");


const getDogId = async (req, res) => {
  try {
    const { id } = req.params;
    
    
    const dataApi = (await axios.get(`${API_URL}?api_key=${API_KEY}`)).data;
    const dogApi = await getApi(dataApi)

    
    const dataDB = await Dog.findAll({
      include: Temperament
    });

    const dogDB = getDataBase(dataDB);
   
    console.log(dogDB,"aaaaaaaaa");
    const allDogs = dogApi.concat(dogDB);

    const foundDog = allDogs.find((dog) => {
      return dog.id.toString() === id;
    });

    if (!foundDog) {
      return res.status(404).send(`No se encontró el ID: ${id}`);
    }

    return res.status(200).json(foundDog);

  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDogId,
};
