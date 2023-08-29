import { getTemperament, postDog } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import validation from "./validation";
import style from "./FormPage.module.css"


const FormPage = () => {

    const temp = useSelector(state => state.temperaments);
    const dispatch = useDispatch();
    

    const [ input, setInput ] = useState({
        name:"",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: "",
        temperaments: [],
        image:"",
    });

    const [ errors, setErrors ] = useState({});

    useEffect (() => {
        dispatch(getTemperament())
    },[dispatch])



    const inputOnChange = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...input,
            [event.target.value]: event.target.value
        }))
    };


    const tempOnChange = (event) => {
        console.log(event.target.value);
        if(input.temperaments.includes(event.target.value)) {
            return setInput({
                ...input
            })
        } else {
            setInput({
                ...input,
                temperaments: [...input.temperaments, event.target.value]
            })
        };
    };

    const closeTemper = (elem) => {
        // console.log(elem, "filterrr");
        const filterTemp = input.temperaments.filter(temp => temp !== elem);

        setInput({
            ...input,
            temperaments: filterTemp
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
            !input.temperaments ||
            !input.image
            ) {
                return alert("faltan llenar los campos son obligatorios")
            }
            dispatch(postDog(input));
            alert("perro creado")
            setInput({
                name:"",
                height_min: "",
                height_max: "",
                weight_min: "",
                weight_max: "",
                life_span_min: "",
                life_span_max: "",
                temperaments: [],
                image:"",
            })
        }
      
        

    return (
        <div className={style.conteiner}>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div style={style.grupo}>
                    <label htmlFor="name">name: </label>
                    <input type="text" name="name" value={input.name} onChange={inputOnChange} /> 
                </div>
                    {errors.name && <p className={style.error}>{errors.name}</p>}


                <div style={style.grupo}>
                    <label htmlFor="height_min">height min: </label>
                    <input type="height_min" name="height_min" value={input.height_min} onChange={inputOnChange} />
                    {errors.height_min && <p className={style.error}>{errors.height_min}</p> } 

                    <label htmlFor="height_max">height max: </label>
                    <input type="height_max" name="height_max" value={input.height_max} onChange={inputOnChange} />
                    {errors.height_max && <p className={style.error}>{errors.height_max}</p> }
                </div>

                <div>
                    <label htmlFor="weight_min">weight min: </label>
                    <input type="weight_min" name="weight_min" value={input.weight_min} onChange={inputOnChange}/>
                    {errors.weight_min && <p className={style.error}>{errors.weight_min}</p> }

                    <label htmlFor="weight_max">weight max: </label>
                    <input type="weight_max" name="weight_max" value={input.weight_max} onChange={inputOnChange} />
                    {errors.weight_max &&<p className={style.error}>{errors.weight_max}</p> }
                </div>


                <div>
                    <label htmlFor="life_span_min">life_span_min: </label>
                    <input type="life_span_min" name="life_span_min" value={input.life_span_min} onChange={inputOnChange} />
                    {errors.life_span_min && <p className={style.error}>{errors.life_span_min}</p> }

                    <label htmlFor="life_span_max">life_span_max: </label>
                    <input type="life_span_max" name="life_span_max" value={input.life_span_max} onChange={inputOnChange} />
                    {errors.life_span_max && <p className={style.error}>{errors.life_span_max}</p> }
                </div>


                <div>
                    <select name="temperaments" defaultValue="temperament" onChange={tempOnChange}>
                        <option value="temperament" disabled>select temperaments</option>
                    {
                        temp.map(elem => {
                            return (
                                <option key={elem.id} value={elem.name}>{elem.name}</option>
                                )
                            })
                        }
                    </select>
                    {errors.temperaments && <p className={style.error}>{errors.temperaments}</p> }
                    {
                        input.temperaments?.map(elem => {
                            return (
                                <div key={elem}>
                                    <button onClick={() => closeTemper(elem)} className={style.btn1}>X</button>
                                    <p>{elem}</p>
                                </div>
                            )
                        })
                    }; 
                </div>


                <div>
                    <label htmlFor="img" placeholder="url image">url</label>
                    <input type="img" name="image" value={input.image} onChange={inputOnChange} />
                    {errors.image && <p className={style.error}>{errors.image}</p> }
                </div>

                <button type="submit" className={style.btn2}>create</button>
            </form>
        </div>
    )
}

export default FormPage;