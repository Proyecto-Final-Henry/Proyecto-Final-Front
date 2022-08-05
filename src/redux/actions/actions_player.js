import {
    GET_GENRE,
    GET_GENRES,
    CLEAN_GENRE
} from "../constants";

import axios from "axios";

const urlApi = 'http://localhost:3001/api/back-end';

export const getGenres = () => {
    const url =  `${urlApi}/genres`;
    return async (dispatch) => {
        axios.get(url)
        .then(responde => {
            dispatch({
                type : GET_GENRES,
                payload : responde.data
            })
        })
        .catch( e => console.log(e));
    }
}
export const getGenre = (id) => {
    const url =  `${urlApi}/genres?genre=${id}`;
    return async (dispatch) => {
        axios.get(url)
        .then(responde => {
            dispatch({
                type : GET_GENRE,
                payload : responde.data
            })
        })
        .catch( e => console.log(e));
    }
}

export const cleanGenre = () => {
    return {
        type: CLEAN_GENRE
    }
}