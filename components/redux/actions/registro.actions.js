
//el tipo de evento que se realizará
import { FETCH_REGISTRO_SUCCESS, FETCH_REGISTRO_ERROR } from "../type/types";


const BASE_URL = 'http://192.168.1.51:3000';

import axios from 'axios'

/* export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
  }); */
  
  export const fetchDataSuccess = (data) => ({
    type: FETCH_REGISTRO_SUCCESS,
    payload: data
  });
  
  export const fetchDataFailure = (error) => ({
    type: FETCH_REGISTRO_ERROR,
    payload: error
  });
  
  // Thunk action creator
  export const fetchData = (email, password) => {
    return async (dispatch) => {

        const config = {headers : {'Content-Type':'application/json'}}

        const body = JSON.stringify({email, password})

      try {
        const res = await  axios.post(`${BASE_URL}/users`, body, config)
        console.log("res",res)

        dispatch(fetchDataSuccess(res.data));

      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
  };


/* export const registroUser = (email, password) => async dispatch => {
   
    console.log(email, password)

    
    const config = {headers : {'Content-Type':'application/json'}}

    const body = JSON.stringify({email, password})

    try {
        const res = await  axios.post(`${BASE_URL}/users`, body, config)
      
        console.log("res",res)

        //el dispatch método de almacenamiento de Redux 
        dispatch({
            type: FETCH_REGISTRO_SUCCESS,
            //enviar información para que se realice el cambio
            payload: res.data
        })


    } catch (err) {

        const errors = err
    
        dispatch({
            type: FETCH_REGISTRO_ERROR
        })

       console.log(errors)
    }
} */


