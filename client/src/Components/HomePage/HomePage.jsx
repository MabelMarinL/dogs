import style from "./HomePage.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AllDogs from "../AllDogs/AllDogs";
import { getDogs, cleanGetDogs } from "../../redux/actions";
import Nav from "../Nav/Nav";
import PiePagina from "../PiePagina/PiePagina";




const HomePage = () => {
    const dispatch = useDispatch();
    const [refreshDogs, setRefreshDogs] = useState(false); 
    
    useEffect (() => {
        dispatch(getDogs())
        return () => {dispatch(cleanGetDogs())}
    }, [dispatch, refreshDogs]); 
    
    const handleDogEmojiClick = () => {
        setRefreshDogs(!refreshDogs); 
    };
    

    return (
        <div className={style.contenedor}>
            <div className={style.navegador}>
                <div className={style.img}>
                    <botton className={style.dog} onClick={handleDogEmojiClick}>🐶</botton>
                </div>
                <div className={style.nav}>
                    <SearchBar />
                    <Nav />
                </div>
            </div>
            <div className={style.allDogs}>
                <AllDogs />
            </div>
            <footer>
                <PiePagina />
            </footer>
        </div>
    )
}

export default HomePage;