module.exports = {
    
    getApi (apiDogs) {
        return apiDogs.map((dog) => {
            return {
                id:dog.id,
                image: dog.image.url,
                name: dog.name,
                height_min: dog.height.metric?.split(" - ")[0],
                height_max: dog.height.metric?.split(" - ")[1],
                weight_min: dog.weight.metric?.split(" - ")[0],
                weight_max: dog.weight.metric?.split(" - ")[1],
                life_span_min: dog.life_span?.split(" - ")[0],
                life_span_max: dog.life_span?.split(" - ")[1],
                temperament: dog.temperament
            }
        })
    },


    getDataBase (dataBase)  {
        console.log(dataBase,"dbbbiiiiiiii");
        return dataBase.map((dog) => {
            return {
                id:dog.id,
                image: dog.image,
                name: dog.name,
                height_min: dog.height_min,
                height_max: dog.height_max,
                weight_min: dog.weight_min,
                weight_max: dog.weight_max,
                life_span_min: dog.life_span_min,
                life_span_max: dog.life_span_max,
                temperament: dog.Temperaments.map(elem => elem.name).join(", ")
            }
        })
    }
}