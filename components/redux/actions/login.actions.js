import { FETCH_AUTH_SUCCESS, FETCH_AUTH_ERROR } from "../type/types";

//mi celu maneja una ip y mi back maneja otra, 
//y si yo pongo localhost es la ip de mi cel esta buscando mi back en mi celu.
const BASE_URL = 'http://192.168.217.99:5000';


import axios from 'axios'


import storage from '../../../components/helpers/storage'



export const loginUser = (email, password) => async dispatch => {

    
   
    const config = { headers : {'Content-Type':'application/json'}}

    const body = JSON.stringify({email, password})
    
    console.info('body=>',body)

   

    try {



        const res = await  axios.post(`${BASE_URL}/auth/login`, body, config)
        
      
        console.log("res",res)
            
        
            const userInfo=res.data

            //necesita como parámetros una clave para identificar y un valor
            // es necesario convertir el valor a string con JSON.stringify para poder guardarlo en el AsyncStorage
        storage.set('userInfo', JSON.stringify(userInfo));

    //nos permite recuperar datos utilizando la clave con la que se guardaron los datos
    const isloading = await storage.get('userInfo');

        console.log(isloading);
  
       
            
        dispatch({
            type: FETCH_AUTH_SUCCESS,
            payload: res.data
        })

        


    } catch (err) {

        const errors = err
    
        dispatch({
            type: FETCH_AUTH_ERROR
        })

       console.log(errors)
    }

    


}

