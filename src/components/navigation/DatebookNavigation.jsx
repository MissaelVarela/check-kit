import React from 'react';

import DatebookScreen from '../screens/DatebookScreen';
import DatebookSelectionScreen from '../screens/DatebookSelectionScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateReservationScreen from '../screens/CreateReservationScreen';

const Stack = createNativeStackNavigator();

export default function DatebookNavigation({ navigation, route }) {

// Se ejecuta cuando se navega al MaintenanceNavigation con parametros.
React.useEffect(() => {
  if (route.params) {
    const { targetScreen, data } = route.params;
    // Enrutando a la pantalla target
    if (targetScreen === "Datebook") 
      if (navigation) 
        navigation.navigate("Datebook", { selectedEquipment: data.equipmentId });
  }
}, [route.params]);

  return (
    <Stack.Navigator
        screenOptions={{title: "Agenda", headerTitleAlign: "center"}}>
        <Stack.Screen name="DatebookSelection" component={DatebookSelectionScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Datebook" component={DatebookScreen}/>
        <Stack.Screen name="CreateReservation" component={CreateReservationScreen}/>
    </Stack.Navigator>  
  )
}