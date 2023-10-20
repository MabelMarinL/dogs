require('dotenv').config();
const axios = require("axios");
const { API_URL, API_KEY } = process.env;
const { Dog, Temperament } = require("../db");


const postDog = async(req, res) => {
    const { name, image, height_max, height_min, weight_max, weight_min,life_span_max, life_span_min, temperament } = req.body;
    

    try {
        if(!name || !image || !height_max || !height_min || !weight_max || !weight_min ||!life_span_max || !life_span_min || !temperament) {
            return res. status(400).send("faltan datos")
        }
        
        
        const apiDogs = [(await axios.get(`${API_URL}?api_key=${API_KEY}`)).data];
        const findDogApi = apiDogs.find(dog => dog.name === name)

        const detailDB = await Dog.findOne({ where: {name:name}});


        if(findDogApi || detailDB) {
            return res.status(200).json(`La raza ${name} ya esta registrado`)
        }


        const newDog = await Dog.create({
            name,
            image,
            height_min,
            height_max,
            weight_min,
            weight_max,
            life_span_min,
            life_span_max,
        });
       
        const findTemperament = await Temperament.findAll({
            where: {name:temperament}
        });
      

        await newDog.addTemperaments(findTemperament)
        
   
        const includeTemp = findTemperament.map(temp => temp.name);

        
        const allCreateDog = newDog.toJSON();
        allCreateDog.temperament = includeTemp;


        return res.status(200).json(allCreateDog);

    } catch (error) {
        console.log(error);
        return res.status(400).json({error: error.message});
    }
}

module.exports = {
    postDog
}


