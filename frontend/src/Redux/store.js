import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
  } from "redux";
  
  import thunk from "redux-thunk";
import { TimeClientReducer } from "./TimeClient/timeclientReducer";
 
  const rootReduser = combineReducers({
   
    TimeClientReducer:TimeClientReducer
  });
  
  export const store = createStore(rootReduser, applyMiddleware(thunk));
  