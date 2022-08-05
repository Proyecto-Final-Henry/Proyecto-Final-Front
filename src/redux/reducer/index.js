
import {GET_USER_DATA, GET_SEARCH} from '../constants'

const initialState = {
    userData:[],
    searchResult:[],
    pagination:{},
    query:'',
    filter:'',
    index:0
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
          return {...state, userData: action.payload}
        
        case GET_SEARCH:
          let response= action.payload.response;
          let valueIndex;
          if(action.payload.index===undefined){
            valueIndex=0
          }else{
            valueIndex=action.payload.index
          }
          return {
            ...state, 
            searchResult: response.data,
            pagination: {total:response.total, prev: response.prev, next:response.next, limit:response.limit},
            query: action.payload.query,
            filter:action.payload.filter,
            index: valueIndex
          }
        
        default:
          return state;
      }
};
export default rootReducer;