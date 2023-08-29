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

}