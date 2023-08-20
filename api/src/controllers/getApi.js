module.exports = {
    getApi (apiDogs) {
        return apiDogs.map((dog) => {
            return {
                id:dog.id,
                image: dog.image.url,
                name: dog.name,
                height: dog.height.metric,
                weight: dog.weight.metric,
                life_span: dog.life_span,
                temperament: dog.temperament?.split(", ")
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
                    temperament: dog.temperament.map((tem) => tem.name).join(', '),
            };
        });
    },

}