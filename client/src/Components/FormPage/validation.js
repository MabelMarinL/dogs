const validation = (input) => {

    const errors = {};
    // name
    if(! /^[A-Za-z\s]+$/.test(input.name)) {
        errors.name = "Nombre invalido";
    } else if (input.name.length > 30) {
        errors.name = "No puede tener mas de 30 caracteres";
    } else if(!input.name) {
        errors.name = "Ingrese el nombre";
    };

    // height
    if(!/^\d{1,2}(\.\d{1,2})?$/.test(input.height_min)) {
        errors.height_min = "Medida invalida";
    } else if (!input.height_min) {
        errors.height_min = "Colocar la medida en centimetros";
    };

    if (!/^\d{1,2}(\.\d{1,2})?$/.test(input.height_max)) {
        errors.height_max = "Medida invalida";
    } else if (!input.height_max) {
        errors.height_max = "Colocar la medida en centimetros";
    } else if (input.height_max && parseFloat(input.height_max) < parseFloat(input.height_min)) {
        errors.height_max = `La altura maxima no puede ser menor ${input.height_min}`;
    };

    // weight
    if(!/^\d{1,2}(\.\d{1,2})?$/.test(input.weight_min)) {
        errors.weight_min = "Medida invalida";
    } else if (!input.weight_min) {
        errors.weight_min = "Colocar el peso en Kg";
    };

    if(!/^\d{1,2}(\.\d{1,2})?$/.test(input.weight_max)) {
        errors.weight_max = "Medida invalida";
    } else if (!input.weight_max) {
        errors.weight_max = "Colocar el peso en Kg";
    } else if (input.weight_max && parseFloat(input.weight_max) < parseFloat(input.weight_min)) {
        errors.weight_max = `El peso maximo no puede ser menor que ${input.weight_min}`;
    };

    // life
    if(!/^\d{1,2}(\.\d{1,2})?$/.test(input.life_span_min)) {
        errors.life_span_min = "Valor invalido";
    } else if (!input.life_span_min) {
        errors.life_span_min = "Campo obligatorio";
    };

    if(!/^\d{1,2}(\.\d{1,2})?$/.test(input.life_span_max)) {
        errors.life_span_max = "Valor invalido";
    } else if (!input.life_span_max) {
        errors.life_span_max = "Campo obligatorio";
    } else if (input.life_span_max && parseFloat(input.life_span_max) < parseFloat(input.life_span_min)) {
        errors.life_span_max = `La esperanza de vida no puede ser menor que ${input.life_span_min}`;
    };

    // temperament
    if(input.temperament.length === 0) {
        errors.temperament = "Campo obligatorio"
    }


    // image
    if(!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp)/.test(input.image)) { 
        errors.image = "URL invalida";
    } else if (!input.image) {
        errors.image = "Colocar la URL de la imagen"
    }



    return errors;
}

export default validation;
