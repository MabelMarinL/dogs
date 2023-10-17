import { GET_DOGS,CLEAN_GET_DOGS, SEARCH_NAME, GET_DETAIL, CLEAN_DETAIL, GET_TEMPERAMENTS, CLEAN_TEMPERAMENTS, FILTER_TEMPERAMENTS, ORDER_NAME, ORDER_WEIGHT, POST_DOG, CREATE_DOGS_FILTER } from "./action-type";
import axios from"axios";


const URL = "https://dogs-production-2e84.up.railway.app/";


export  const getDogs = () => {
    return async(dispatch) => {
        try {
            const { data } = await axios(`${URL}/dogs`);
            dispatch({
                type: GET_DOGS,
                payload:data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export const cleanGetDogs = () => {
    return {
        type: CLEAN_GET_DOGS
    }
}

export const searchName = (name) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/dogs?name=${name}`);
            dispatch({
                type: SEARCH_NAME,
                payload: data
            })
            
        } catch (error) {
            console.log(error);
        }
    }
};

export const getDetailId = (id) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/dogs/${id}`);
            dispatch({
                type:GET_DETAIL,
                payload: data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
};

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    }
}

export const getTemperament = () => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/temperaments`);
            dispatch({
                type: GET_TEMPERAMENTS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export const cleanTemperaments = () => {
    return {
        type: CLEAN_TEMPERAMENTS,

    }
}

export const filterTemperaments = (temperament) => {
    return {
        type: FILTER_TEMPERAMENTS,
        payload:temperament,
    }
}

export const orderName = (order) => {
    return {
        type: ORDER_NAME,
        payload: order

    }
};

export const orderWieght = (order) => {
    return {
        type: ORDER_WEIGHT,
        payload: order
    }
};

export const postDog = (infor) => {
    
    return async(dispatch) => {
        try {
            const {data} = await axios.post(`${URL}/dogs`, infor);
            dispatch({
                type: POST_DOG,
                payload: data
            })
        
        } catch (error) {
            console.log(error);
        }
    }
}

export const createDogsFilter = () => {
    return {
        type: CREATE_DOGS_FILTER,
    } 
}