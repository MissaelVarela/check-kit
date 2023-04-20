import React from 'react';

import MaintenanceConfirmScreen from '../screens/MaintenanceConfirmScreen';
import MaintenanceSelectionScreen from '../screens/MaintenanceSelectionScreen';
import CheckListScreen from '../screens/CheckListScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MaintenanceNavigation({ navigation, route }) {

const [ equipmentId, setEquipmentId ] = React.useState(null);

// Se ejecuta cuando se navega al MaintenanceNavigation con parametros.
React.useEffect(() => {
  if (route && route.params) {
    const { maintenanceRequest, selectedEquipment } = route.params;
    if (maintenanceRequest) {
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
      navigation.navigate("MaintenanceConfirm", { selectedEquipment: equipmentId });
  }
}, [equipmentId])

  return (
    <Stack.Navigator
      initialRouteName={"MaintenanceSelection"}
      screenOptions={{ title: "Mantenimiento", headerTitleAlign: "center" }}>
      <Stack.Screen name="MaintenanceSelection" component={MaintenanceSelectionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MaintenanceConfirm" component={MaintenanceConfirmScreen} />
      <Stack.Screen name="CheckList" component={CheckListScreen} />
    </Stack.Navigator> 
     
  )
}