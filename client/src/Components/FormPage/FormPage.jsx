import { getTemperament, postDog, cleanTemperaments } from "../../redux/actions";
import Swal from "sweetalert2"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import validation from "./validation";
import style from "./FormPage.module.css"


const FormPage = () => {

    const temp = useSelector(state => state.temperament);
    const dispatch = useDispatch();
    

    const [ input, setInput ] = useState({
        name:"",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: "",
        temperament: [],
        image:"",
    });
    
    const [ errors, setErrors ] = useState({});

    useEffect (() => {
        dispatch(getTemperament())
        return () => {dispatch(cleanTemperaments())};
    },[dispatch])



    const inputOnChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...input,
            [event.target.name]: event.target.value
        }))
    };

   
    const tempOnChange = (event) => {
        console.log(event.target.value);
        if(input.temperament.includes(event.target.value)) {
            return setInput({
                ...input
            })
        } else {
            setInput({
                ...input,
                temperament: [...input.temperament, event.target.value]
            })
        };
    };


    const closeTemper = (elem) => {
        const filterTemp = input.temperament.filter(temp => temp !== elem);

        setInput({
            ...input,
            temperament: filterTemp
        })
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if(
            !input.name ||
            !input.height_min ||
            !input.height_max || 
            !input.weight_min ||
            !input.weight_max ||
            !input.life_span_min ||
            !input.life_span_max ||
            !input.temperament ||
            !input.image
        ){
            return Swal.fire({
                title: 'Error!',
                text: 'Todos los campos son obligatorios!',
                icon: 'error'
            })
        }

        dispatch(postDog(input));
            Swal.fire({
                title: 'Buen trabajo!',
                text: 'El formulario se ha llenado de forma correcta!',
                icon: 'success'
            })
        setInput({
            name:"",
            height_min: "",
            height_max: "",
            weight_min: "",
            weight_max: "",
            life_span_min: "",
            life_span_max: "",
            temperament: [],
            image:"",
        })
    }
          
        


    return (
        <div className={style.contenedor}>
            <form onSubmit={(event) => handleSubmit(event)} className={style.formulario}>
                <div style={style.grupo}>
                    <label htmlFor="name">name: </label>
                    <input type="text" name="name" value={input.name} onChange={inputOnChange} className={style.name} /> 
                    {errors.name && <p className={style.errorName}>*{errors.name}</p>}
                </div>


                <div style={style.grupo} >
                    <label htmlFor="height_min">height min(cm): </label>
                    <input type="height_min" name="height_min" value={input.height_min} onChange={inputOnChange} />
                    {errors.height_min && <p className={style.error}>*{errors.height_min}</p> } 
                        
                    <label htmlFor="height_max" className={style.labelMax}>height max: </label>
                    <input type="height_max" name="height_max" value={input.height_max} onChange={inputOnChange} />
                    {errors.height_max && <p className={style.errorM}>*{errors.height_max}</p> }
                </div>

                <div>
                    <label htmlFor="weight_min">weight min(kg): </label>
                    <input type="weight_min" name="weight_min" value={input.weight_min} onChange={inputOnChange}/>
                    {errors.weight_min && <p className={style.error}>*{errors.weight_min}</p> }

                    <label htmlFor="weight_max" className={style.labelMax}>weight max: </label>
                    <input type="weight_max" name="weight_max" value={input.weight_max} onChange={inputOnChange} />
                    {errors.weight_max &&<p className={style.errorM}>*{errors.weight_max}</p> }
                </div>


                <div>
                    <label htmlFor="life_span_min">life span min :</label>
                    <input type="life_span_min" name="life_span_min" value={input.life_span_min} onChange={inputOnChange} />
                    {errors.life_span_min && <p className={style.error}>*{errors.life_span_min}</p> }

                    <label htmlFor="life_span_max" className={style.labelMax}>life span max: </label>
                    <input type="life_span_max" name="life_span_max" value={input.life_span_max} onChange={inputOnChange} />
                    {errors.life_span_max && <p className={style.errorM}>*{errors.life_span_max}</p> }
                </div>


                <div className={style.selectTemperament}>
                    <p className={style.descripcionTemp}>Temperaments :</p>
                    <select name="temperament" defaultValue="temperament" onChange={tempOnChange}>
                        <option value="temperament" disabled>select temperaments</option >
                    {
                        temp.map(elem => {
                            return (
                                <option key={elem.id} value={elem.name}>{elem.name}</option>
                                )
                            })
                    }
                    </select>
                    {input.temperament.length === 0 && <p className={style.errorTem}>{errors.temperament}</p> }
                    {
                        input.temperament?.map(elem => {
                            return (
                                <div key={elem} className={style.temp}>
                                    <div className={style.subTemp}>
                                        <button onClick={() => closeTemper(elem)} className={style.btn1}>X</button>
                                        <p className={style.element}>{elem}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                <div>
                    <label htmlFor="img" placeholder="url image">url</label>
                    <input type="img" name="image" value={input.image} onChange={inputOnChange} className={style.url} />
                    {errors.image && <p className={style.errorUrl}>*{errors.image}</p> }
                </div>
                
                <button 
                    type="submit" 
                    className={style.btn2} 
                    disabled ={errors.name || errors.height_max || errors.height_min || errors.weight_max || errors.weight_min || errors.life_span_max || errors.life_span_min || errors.image || !input.temperament.length}  
                    >
                    create
                </button>
            </form>
        </div>
    )
}

export default FormPage;