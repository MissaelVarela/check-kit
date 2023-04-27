import React from 'react';

import MaintenanceConfirmScreen from '../screens/MaintenanceConfirmScreen';
import MaintenanceSelectionScreen from '../screens/MaintenanceSelectionScreen';
import CheckListScreen from '../screens/CheckListScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MaintenanceNavigation({ navigation, route }) {

// Se ejecuta cuando se navega al MaintenanceNavigation con parametros.
React.useEffect(() => {
  if (route.params) {
    const { targetScreen, data } = route.params;
    // Enrutando a la pantalla target
    if (targetScreen === "MaintenanceConfirm") 
      if (navigation) 
        navigation.navigate("MaintenanceConfirm", { selectedEquipment: data.equipmentId });
  }
}, [route.params]);


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