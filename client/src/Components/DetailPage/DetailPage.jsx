import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetailId, cleanDetail } from "../../redux/actions";


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
        <div>
            <h1>{detail.name}</h1>
            <h4>Height: {detail.height_min} - {detail.height_max}</h4>
            <h4>Weight: {detail.weight_min} - {detail.weight_max}</h4>
            <h4>Life span: {detail.life_span_min} - {detail.life_span_max}</h4>
            <h4>Temperament: {detail.temperament}</h4>
            <img src={detail.image} alt={detail.name} />
        </div>
    )
};

export default DetailPage;