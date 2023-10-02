import React from "react";
import style from "./CardDog.module.css";
import { Link } from "react-router-dom";


const CardDog = ({id, image, name, temperament, weight_max, weight_min, life_span_min}) => {

    return (
        <div key={id} className={style.contenedor}>
            <Link to={`/detail/${id}`}>
                <div className={style.contenedor_image}>
                    <img src={image} alt={name} className={style.image} />
                </div>
                <div className={style.cardDescripcion}>
                    <h4>Name: {name}</h4>
                    <h4>Temperament: {temperament}</h4>
                    <h4>Weight: {weight_min} - {weight_max} kg</h4>
                </div>
            </Link>
        </div>
    )
}

export default CardDog;