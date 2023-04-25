import React from 'react';

import DatebookScreen from '../screens/DatebookScreen';
import DatebookSelectionScreen from '../screens/DatebookSelectionScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateReservationScreen from '../screens/CreateReservationScreen';

const Stack = createNativeStackNavigator();

export default function DatebookNavigation({ navigation, route }) {

  const [ equipmentId, setEquipmentId ] = React.useState(null);

  // Se ejecuta cuando se navega al MaintenanceNavigation con parametros.
  React.useEffect(() => {
    if (route && route.params) {
      const { datebookRequest, selectedEquipment } = route.params;
      if (datebookRequest) {
        console.log("Se actualizo el valor", selectedEquipment)
        setEquipmentId(selectedEquipment);
      }
    }
  }, [route.params])

  // Se ejecuta cuando cambia el valor de equimentId.
  React.useEffect(() => {
    console.log("intentando navegar")
    if (equipmentId) {
        setEquipmentId(null);
        navigation.navigate("Datebook", { selectedEquipment: equipmentId });
    }
  }, [equipmentId])

  return (
    <Stack.Navigator
        screenOptions={{title: "Agenda", headerTitleAlign: "center"}}>
        <Stack.Screen name="DatebookSelection" component={DatebookSelectionScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Datebook" component={DatebookScreen}/>
        <Stack.Screen name="CreateReservation" component={CreateReservationScreen}/>
    </Stack.Navigator>  
  )
}