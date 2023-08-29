import style from "./LadingPage.module.css";
import { Link } from "react-router-dom";


const LandingPage = () => {
    return (
        <div className={style.contenedor}>
            <h1 className={style.title}>WELCOME</h1>
            <button className={style.btn}>
                <Link to={"/home"} className={style.line}>START</Link>
            </button>
        </div>
    )
}

export default LandingPage;