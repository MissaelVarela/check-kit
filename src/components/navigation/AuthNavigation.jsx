import LoginScreen from '../screens/LoginScreen'
import MainNavigation from './MainNavigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator 
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Iniciar sesión" }}/>
        <Stack.Screen name="Main" component={MainNavigation}/>
    </Stack.Navigator>  
  )
}
