import LoginScreen from '../screens/LoginScreen'
import Main from './Main';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator 
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Main" component={Main}/>
    </Stack.Navigator>  
  )
}
