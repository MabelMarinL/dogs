import { useState } from"react";
import { searchName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import search from "./search.png"


const SearchBar = () => {

    const [ name, setName ] = useState("");
    const dispatch = useDispatch();
    
    const nameChange = (event) => {
        setName(event.target.value)
    };

    const onClickHandler = () => {
        dispatch(searchName(name))
        setName("")
    }


    return (
        <div className={style.contenedor}>
            <img src={search}/>
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={(event)=> nameChange(event)} 
                placeholder="name..."  
                onKeyPress={(event) => {event.key === "Enter" && onClickHandler()}} 
                />
            
        </div>
    )
}

export default SearchBar;