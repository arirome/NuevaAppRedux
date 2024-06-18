import { Stack } from "expo-router";

//REDUX

import { Provider } from 'react-redux';
import store from './../components/redux/store/store'

import Toast from 'react-native-toast-message';


export default function RootLayout() {
  return (
    <Provider  store={store}>
        
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home'}}/> 
      <Stack.Screen name="registro" options={{ title: 'registro'}}/>
      <Stack.Screen name="login" options={{ title: 'login'}}/>
      
    </Stack>
    <Toast/>
    </Provider>
  );
}
