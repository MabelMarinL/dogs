const axios = require("axios");
const { API_URL, API_KEY } = process.env;
const { Temperament } = require("../db");


const getTemperament = async(req, res) => {
    const { data } = await axios.get(`${API_URL}?api_key=${API_KEY}`);
    const allTemperament = []
    try {
        data.forEach(({temperament}) => {
            if(temperament)
            allTemperament.push(... temperament.split(","))
        });
        
        const filterTemp = allTemperament.filter((temp, index) => allTemperament.indexOf(temp) === index)



        const createTempProme = await filterTemp.map((elem) => Temperament.findOrCreate({where:{name:elem}}));
       

        const createTempPromises = filterTemp.map(async (elem) => {
            const [temperament, created] = await Temperament.findOrCreate({
                where: { name: elem },
            });
            return temperament; // Solo devolvemos el objeto creado - created es el valor booleano que se crea
        });
        const createdTemperaments = await Promise.all(createTempPromises);

        return res.status(200).json(createdTemperaments);

        
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

module.exports = {
    getTemperament
}