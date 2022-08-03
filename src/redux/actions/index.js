import {
    SEND_EMAIL_CONTACT,
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