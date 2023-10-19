import CardDog from "../CardDog/CardDog";
import { useSelector } from "react-redux";
import { useState } from "react";
import style from "./AllDogs.module.css";

const AllDogs = () => {

    const characters = useSelector(state => state.characters);

    const [ page, setPage ] = useState(0);
    const cardPage = 8;
    const numberPage = Math.ceil(characters.length/cardPage);
    console.log(numberPage);
    console.log(characters.length);

    const firstPage = () => {
        setPage(0);
    }

    const nextPage = () => {
        setPage(page + cardPage)
    }

    const prevPage = () => {
        setPage(page - cardPage)
    }

    const lastPage = () => {
        setPage((numberPage-1) * cardPage)
    }
    const paginado = characters.slice(page, page + cardPage);

    return (
        <div className={style.contenedor}>
            {
                paginado.map((char) => {
                    return (
                        <CardDog
                            key = {char.id}
                            id = {char.id}
                            image = {char.image }
                            name = {char.name}
                            temperament={char.temperament}
                            weight_max = {char.weight_max}
                            weight_min = {char.weight_min}
                        />
                    )
                })
            }
            <div className={style.pagination}>
                <button onClick={firstPage} disabled={page === 0}>{"<<"}</button>
                <button onClick={prevPage} disabled={page === 0}>{"<"}</button>
                <p> {page/cardPage +1} de {numberPage}</p>
                <button onClick={nextPage} disabled={numberPage === page/cardPage +1}>{">"}</button>
                <button onClick={lastPage} disabled={numberPage === page/cardPage +1}>{">>"}</button>
            </div>
        </div>
    )
}

export default AllDogs;