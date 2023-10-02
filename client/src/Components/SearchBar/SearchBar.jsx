import { useState } from"react";
import { searchName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";

const SearchBar = () => {

    const [ name, setName ] = useState("");
    const dispatch = useDispatch();
    
    const nameChange = (event) => {
        setName(event.target.value)
    };

    const onClickHandler = () => {
        dispatch(searchName(name))
    }

    return (
        <div className={style.contenedor}>
            <input type="text" name="name" value={name} onChange={(event)=> nameChange(event)} placeholder="Search name..." className={style.input} />
            <button onClick={() => {onClickHandler(); setName("")}} className={style.btn}>Search</button>
        </div>
    )
}

export default SearchBar;