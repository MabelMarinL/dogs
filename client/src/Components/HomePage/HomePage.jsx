import SearchBar from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AllDogs from "../AllDogs/AllDogs";
import { getDogs, cleanGetDogs } from "../../redux/actions";
import Nav from "../Nav/Nav";
import style from "./HomePage.module.css";



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
                <h1 className={style.title}>DOGS</h1>
                <div className={style.img}>
                    <h2 className={style.dog} onClick={handleDogEmojiClick}>🐶</h2>
                </div>
                <div className={style.nav}>
                    <SearchBar />
                    <Nav />
                </div>
            </div>
                <AllDogs />
        </div>
    )
}

export default HomePage;