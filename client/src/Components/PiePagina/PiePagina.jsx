import github from "./github.png";
import linkedin from "./linkedln.png"
import style from "./PiePagina.module.css"

const PiePagina = () => {
    return (
    <div className={style.contenedor}>
        <h6 className={style.descripcion}>Contact :</h6>
        <div className={style.item}>
            <a href="https://github.com/MabelMarinL" className={style.enlaceGithub}>
                <img src={github} alt="github" className={style.github} />
                <p>github</p>
            </a>
        </div>
        <div className={style.item}>
            <a href="https://www.linkedin.com/in/mabel-mar%C3%ADn-lozano-857078242/">
                <img src={linkedin} alt="linkedln"  className={style.linkedin} />
                <p>linkedin</p>
            </a>
        </div>
</div>

    )
}

export default PiePagina;