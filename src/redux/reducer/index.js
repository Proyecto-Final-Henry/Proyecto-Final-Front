import {
  GET_USER_DATA,
  GET_GENRE,
  GET_GENRES,
  CLEAN_GENRE
} from "../constants";


const initialState = {
    userData:[],
    genres:[],
    genre:{},
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
          return {
            ...state, 
            userData: action.payload
          }
        case GET_GENRES:
          return {
            ...state, 
            genres : [...action.payload],
          }
        case GET_GENRE:
          return {
            ...state, 
            genre: action.payload
          }
        case CLEAN_GENRE:
          return {
            ...state, 
            genre: {}
          }

        default:
          return state;
      }
};
export default rootReducer;