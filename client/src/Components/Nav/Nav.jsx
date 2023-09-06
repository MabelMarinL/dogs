import { getTemperament, filterTemperaments, cleanTemperaments, orderName, orderWieght, createDogsFilter } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"


const Nav = () => {
    const temperaments = useSelector(state => state.temperaments);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getTemperament());
        return () => {dispatch(cleanTemperaments())};
    },[dispatch]);

    
    const handlerTemp = (event) => {
        console.log(event.target.value);
        dispatch(filterTemperaments(event.target.value));
    };
   

    const handlerName = (event) => {
        console.log(event.target.value);
        dispatch(orderName(event.target.value))
    }

    const handlerweight = (event) => {
        console.log(event.target.value);
        dispatch(orderWieght(event.target.value))
    }


    return (
        <div className={style.contenedor}>
            <div>
                <Link to={"/dogs"}><button className={style.btn}>Create Dog</button></Link>
            </div>
            <div>
                <select defaultValue="temperaments" onChange={handlerTemp}>
                    <option value="temperaments" disabled>Select temperament</option>
                    <option value="All">All</option>
                    {
                        temperaments?.map((element) => {
                            return (
                                <option value={element.name} key={element.id}>{element.name}</option>
                                )
                            })
                        }
                </select>
            </div>

            <div>
                <select name="order" defaultValue="order" onChange={handlerName}>
                    <option value="order" disabled>Order breeds</option>
                    <option value="A - Z">A - Z</option>
                    <option value="Z - A">Z - A</option>
                </select>
            </div>
            <div>
                <select name="weight" defaultValue="weight" onChange={handlerweight}>
                    <option value="weight" disabled>Weight</option>
                    <option value="more weight">➕ weight</option>
                    <option value="less weight">➖ weight</option>
                </select>
            </div>
        </div>
    )
}

export default Nav;