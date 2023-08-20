const { Dog } = require("../db");
const axios = require("axios");
const { API_URL, API_KEY } = process.env;
const { getApi } = require("./getApi")

const getDogId = async (req, res) => {
  try {
    const { id } = req.params;
    
    // API
    const dataApi = (await axios.get(`${API_URL}?api_key=${API_KEY}`)).data;
    const dogApi = await getApi(dataApi)

    // DB
    const dogDB = await Dog.findAll();

    // API y la DB
    const allDogs = dogApi.concat(dogDB.map(dbDog => dbDog.toJSON()));

    
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
