import React from 'react';

import MaintenanceConfirmScreen from '../screens/MaintenanceConfirmScreen';
import MaintenanceSelectionScreen from '../screens/MaintenanceSelectionScreen';
import CheckListScreen from '../screens/CheckListScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackContext from '../../context/StackContext';
import DrawerContext from '../../context/DrawerContext';
import LogSelectionScreen from '../screens/LogSelectionScreen';
import LogScreen from '../screens/LogScreen';

const Stack = createNativeStackNavigator();

export default function LogNavigation({ navigation, route }) {

// Creando el estado del Stack que almacena el metodo navigation.goBack().
const [ goBack, setGoBack ] = React.useState({ method: null });

  return (
    <StackContext.Provider
      value={{ 
        goBack: goBack, 
        setGoBack: setGoBack,
      }}>
      <Stack.Navigator
        initialRouteName={"LogSelection"}
        screenOptions={{ title: "Registro", headerTitleAlign: "center", headerShown: false }}>
        <Stack.Screen name="LogSelection" component={LogSelectionScreen} />
        <Stack.Screen name="Log" component={LogScreen} />
      </Stack.Navigator> 
    </StackContext.Provider>
     
  )
}