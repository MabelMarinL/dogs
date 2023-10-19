import { GET_DOGS, CLEAN_GET_DOGS, SEARCH_NAME, GET_DETAIL, CLEAN_DETAIL, GET_TEMPERAMENTS, FILTER_TEMPERAMENTS, ORDER_NAME, ORDER_WEIGHT, POST_DOG } from "./action-type";

const initialState = {
    characters: [],
    detail: [],
    temperament: [],
    filter: [],
    posteos: [],
}

const reducer = (state=initialState, action) => {
    let copyCharacters = [...state.filter];

    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                characters:action.payload,
                filter: action.payload
            }
        case CLEAN_GET_DOGS:
            return {
                ...state,
                characters:[],
            }

        case SEARCH_NAME:
            return {
                ...state,
                characters: action.payload
            }
        
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                detail: []
            }

        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperament: action.payload
            }
        case FILTER_TEMPERAMENTS:
            const filter = copyCharacters.filter(e => e.temperament?.includes(action.payload))
            
            return {
                ...state,
                characters: action.payload === "All" ? [...state.filter] : filter
            }
            
        case ORDER_NAME:
            return {
                ...state,
                characters: 
                action.payload === "A - Z" 
                ? [...state.characters].sort((a,b) => {
                    if(a.name > b.name) return +1
                    if(a.name < b.name) return -1
                    return 0
                })
                :[...state.characters].sort((a,b) => {
                    if(a.name > b.name) return -1
                    if(a.name < b.name) return +1
                    return 0
                })
            }
        
        case ORDER_WEIGHT:
            return {
                ...state,
                characters: 
                action.payload === "more weight"
                ? [...state.characters].sort((a,b) => {
                    return b.weight_max - a.weight_max
                })
                : [...state.characters].sort((a,b) => {
                    return a.weight_min - b.weight_min
                })
            }
        
        case POST_DOG:
            return{
                ...state,
                characters: [action.payload, ...state.filter],
                posteos: action.payload,
            }
            

        default:
            return {
                ...state
            }
    } 
};

export default reducer;