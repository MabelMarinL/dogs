import style from "./PiePagina.module.css"
import github from "./github.svg";
import linkedin from "./linkedin.svg"


const PiePagina = () => {
    return (
    <div className={style.contenedor}>
        <h6 className={style.descripcion}>Contact :</h6>
        <div className={style.item}>
            <a href="https://github.com/MabelMarinL" className={style.enlaceGithub}>
                <img src={github} alt="logo-github" />
                <p>github</p>
            </a>
        </div>
        
        <div className={style.item}>
            <a href="https://www.linkedin.com/in/mabel-mar%C3%ADn-lozano-857078242/">
                <img src={linkedin} alt="logo-linkedln" />
                <p>linkedin</p>
            </a>
            
        </div>
</div>

    )
}

export default PiePagina;