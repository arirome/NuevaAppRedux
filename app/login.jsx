import {  Text, View,TextInput, Button, ToastAndroid, Pressable  } from "react-native";

//REDUX
import { useDispatch, useSelector } from 'react-redux';

//traemos  las acciones 
import { fetchData } from "../components/redux/actions/registro.actions";
import { useState } from "react";

//notificaciones
import Toast from 'react-native-toast-message';


const Registro = () => {


  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const dispatch = useDispatch();
  
  const handleLogin = () => {
 

     if (email === '' || password === '') {
      return  Toast.show({
        type: 'error',
        text1: 'datos incorrectos',
        position:"bottom"
      });
     }else {

      dispatch(fetchData(email, password))
      return  Toast.show({
        type: 'success',
        text1: 'estas registrado',
        position:"bottom"
      });
     }
    
  
   
     };


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Registro</Text>
    
      <TextInput
        
        placeholder="Email"
        name="email"
        onChangeText={(text) => {
          setEmail(text)
        }
        }
    
      />

<TextInput
                
                placeholder="Contraseña"
                name="password"
                onChangeText={(text) => {
                  setPassword(text)
                }
                }
            
            />

<Button title="Registrarse" color="#F4D03F" onPress={() => handleLogin()}/>


    </View>
  );
}




export default Registro;

