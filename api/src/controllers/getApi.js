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

    formatoDb (inforDb) {
        return inforDb.map((dog) => {
            return {
                    id: dog.id,
                    name: dog.name,
                    image: dog.image,
                    height_max: dog.height_max,
                    height_min: dog.height_min,
                    weight_max: dog.weight_max,
                    weight_min: dog.weight_min,
                    life_span: dog.life_span,
                    temperament: dog.temperament.map((tem) => tem.name).join(", "),
            };
        });
    },

}