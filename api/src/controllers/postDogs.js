const axios = require("axios");
const { API_URL, API_KEY } = process.env;
const { Dog, Temperament } = require("../db");


const postDog = async(req, res) => {
    const { name, image, height_max, height_min, weight_max, weight_min,life_span, temperament } = req.body;

    try {
        if(!name, !image, !height_max, !height_min, !weight_max, !weight_min, !life_span, !temperament) {
            return res. status(400).send("faltan datos")
        }
        
        //*buscar si ya existe dog
        const apiDogs = [(await axios.get(`${API_URL}?api_key=${API_KEY}`)).data];
        const findDogApi = apiDogs.find(dog => dog.name === name)

        const detailDB = await Dog.findOne({ where: {name:name}});


        if(findDogApi || detailDB) {
            return res.status(200).json(`La raza ${name} ya esta registrado`)
        }


        const newDog = await Dog.create({
            name,
            image,
            height_max,
            height_min,
            weight_max,
            weight_min,
            life_span,
        });
        
        const findTemperament = await Temperament.findAll({
            where: {name:temperament}
        });
        await newDog.addTemperaments(findTemperament)
        

        // Obtén los nombres de los temperamentos
        const includeTemp = findTemperament.map(temp => temp.name);

        // Agrega la propiedad temperament al objeto JSON
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


