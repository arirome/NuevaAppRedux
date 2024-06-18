
import {
    FETCH_REGISTRO_SUCCESS,
    FETCH_REGISTRO_ERROR,
 
  } from "../type/types";
  
  
  const INITIAL_STATE = {

   
  isLoading: false,
  error: null,
    data: [],
    
  };
  
  
  
  const someReducer = (state = INITIAL_STATE, action) => {

    const { type, payload } = action;

    switch (type) {
      
      case FETCH_REGISTRO_SUCCESS:
        return {
          isLoading: false,
          
          data: payload,
          
        };

      case FETCH_REGISTRO_ERROR:
        return {
          isLoading: false,
          error: payload
         
        };
      
     
      default:
        return state;
    }
  };
  
  export default someReducer;  
  