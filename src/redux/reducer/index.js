import {GET_USER_DATA} from '../actions'

const initialState = {
    userData:[],
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
        
          return {...state, userData: action.payload}
        
        default:
          return state;
      }
};
export default rootReducer;