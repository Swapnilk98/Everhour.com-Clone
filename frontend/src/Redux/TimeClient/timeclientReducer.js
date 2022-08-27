
import {
 
    GET_CLINET_SUCCESS,
  
  GET_TIMECLINET_SUCCESS,

} from "./actionType";
const initialState={

    timedata:[],
    clientData:[]


}
export const TimeClientReducer = (state=initialState, action) => {
  //console.log(action)
  switch (action.type) {

  
    
    case GET_TIMECLINET_SUCCESS: {
        return {
          ...state,
          
            timedata: action.payload,
        
        };
      }
      case GET_CLINET_SUCCESS: {
        return {
          ...state,
          
          clientData: action.payload,
        
        };
      }
      
     
   
    default: {
      return { ...state };
    }
  }
};
