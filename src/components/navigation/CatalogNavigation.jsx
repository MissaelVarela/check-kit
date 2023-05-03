import React from 'react';

import CatalogScreen from '../screens/CatalogScreen';
import EquipmentScreen from '../screens/EquipmentScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackContext from '../../context/StackContext';

const Stack = createNativeStackNavigator();

export default function CatalogNavigation({ navigation, route }) {

  // Creando el estado del Stack que almacena el metodo navigation.goBack().
  const [ goBack, setGoBack ] = React.useState({ method: null });
  const [ catalogLocation, setCatalogLocation ] = React.useState({ });

  React.useEffect(() => {
    console.log("entrando en cat nav", route.params);
    const { locationId,  location } = route.params ?  route.params : {};
    setCatalogLocation({ locationId: locationId, location: location });
  }, [route.params]);

  return (
    <StackContext.Provider
      value={{ 
        goBack: goBack,
        setGoBack: setGoBack,
        catalogLocation: catalogLocation,
        }}>
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