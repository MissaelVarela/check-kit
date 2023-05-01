import React from 'react';

import CatalogScreen from '../screens/CatalogScreen';
import EquipmentScreen from '../screens/EquipmentScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackContext from '../../context/StackContext';

const Stack = createNativeStackNavigator();

export default function CatalogNavigation() {

  // Creando el estado del Stack que almacena el metodo navigation.goBack().
  const [ goBack, setGoBack ] = React.useState({ method: null });

  return (
    <StackContext.Provider
      value={{goBack: goBack, setGoBack: setGoBack}}>
      <Stack.Navigator
        initialRouteName='Catalog'
        screenOptions={{ 
          title: "Equipos medicos", 
          headerTitleAlign: "center", 
          headerShown: false,
        }}>
        <Stack.Screen name="Catalog" component={CatalogScreen} />
        <Stack.Screen name="Equipment" component={EquipmentScreen} />
      </Stack.Navigator>  
    </StackContext.Provider>
    
  )
}