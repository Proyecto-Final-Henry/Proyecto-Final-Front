
import {GET_USER_DATA, GET_SEARCH} from '../constants'

const initialState = {
    userData:[],
    searchResult:[],
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
        
          return {...state, userData: action.payload}
        
          case GET_SEARCH:
        
          return {...state, searchResult: action.payload}
        
        default:
          return state;
      }
};
export default rootReducer;