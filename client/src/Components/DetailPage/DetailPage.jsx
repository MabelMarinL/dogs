import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetailId, cleanDetail } from "../../redux/actions";
import style from "./DetailPage.module.css"


const DetailPage = () => {
    const detail = useSelector(state => state.detail);
    console.log(detail);
    const {id} = useParams();
    console.log(id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailId(id));
        return () => dispatch(cleanDetail());
    },[dispatch, id])

    return (
        <div className={style.contenedor}>
            <div className={style.subContenedor}>
                <h1 className={style.CardName}>{detail.name}</h1>
                <p>Height: {detail.height_min} - {detail.height_max}</p>
                <p>Weight: {detail.weight_min} - {detail.weight_max}</p>
                <p>Life span: {detail.life_span_min} - {detail.life_span_max}</p>
                <p>Temperament: {detail.temperament}</p>
            </div>
            <img src={detail.image} alt={detail.name} className={style.image}/>
        </div>
    )
};

export default DetailPage;