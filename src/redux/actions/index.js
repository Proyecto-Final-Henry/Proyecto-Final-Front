
import {
    SEND_EMAIL_CONTACT,
    GET_USER_DATA,
    GET_SEARCH
} from "../constants";

import axios from "axios";

const urlTest = 'http://localhost:3001/api/back-end';

export const sendEmailContact = (values) => {
    const url =  urlTest+'/sendEmailContact';
    return async (dispatch) => {
        axios.post(url, values)
        .then(responde => {
            dispatch({
                type : SEND_EMAIL_CONTACT,
                payload : responde.data
            })
        })
        .catch( e => console.log(e));
    }
}

export function getUserData(id) {
    return async function(dispatch) {
      return fetch("http://localhost:3001/api/back-end/users/perfil")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_USER_DATA, payload: json });
        });
    };

}
export function getSearch(toFind, filter, index){
    return async function(dispatch) {
        return fetch(`http://localhost:3001/api/back-end/search?query=${toFind}&filter=${filter}&index=${index}`)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: GET_SEARCH, payload:{response:json, query:toFind, filter:filter, index:index} });
          });
      };

}
