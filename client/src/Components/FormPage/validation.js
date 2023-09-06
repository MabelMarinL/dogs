const validation = (input) => {

    const errors = {};
    
    if(! /^[A-Za-z\s]+$/.test(input.name)) {
        errors.name = "Nombre invalido";
    };
    if(input.name.length > 30) {
        errors.name = "No puede tener mas de 30 caracteres";
    };
    if(!input.name) {
        errors.name = "Ingrese el nombre";
    };


    if(!/^\d{1,2}(\.\d{1,2})?$/.test(input.height_min)) {
        errors.height_min = "Medida invalida";
    };
    if(!input.height_min) {
        errors.height_min = "Colocar la medida en centimetros";
    }

    if(!/^\d{1,2}(\.\d{1,2})?$/.test(input.height_max)) {
        errors.height_max = "Medida invalida";
    };
    if(!input.height_max) {
        errors.height_max = "Colocar la medida en centimetros";
    };


    if(!/^\d{1,2}(\.\d{1,2})?$/.test(input.weight_min)) {
        errors.weight_min = "Medida invalida";
    };
    if(!input.weight_min) {
        errors.weight_min = "Colocar el peso en Kg";
    }

    if(!/^\d{1,2}(\.\d{1,2})?$/.test(input.weight_max)) {
        errors.weight_max = "Medida invalida";
    };
    if(!input.weight_max) {
        errors.weight_max = "Colocar el peso en Kg";
    };


    if(!/^\d{1,2}(\.\d{1,2})?$/.test(input.life_span_min)) {
        errors.life_span_min = "Valor invalido";
    };
    if(!input.life_span_min) {
        errors.life_span_min = "Campo obligatorio";
    }

    if(!/^\d{1,2}(\.\d{1,2})?$/.test(input.life_span_max)) {
        errors.life_span_max = "Valor invalido";
    };
    if(!input.life_span_max) {
        errors.life_span_max = "Campo obligatorio";
    };


    if(!input.temperaments) {
        errors.temperaments = "Elegir al menos un temperamento"
    };


    if(! /^(https?:\/\/)?\S+\.(jpg|jpeg|png|gif|bmp)(\?[\s\S]*)?$/.test(input.image)) { 
        errors.image = "URL invalida";
    };
    if(!input.image) {
        errors.image = "Colocar la URL de la imagen"
    }





    return errors;
}

export default validation;
