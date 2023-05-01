import React from 'react';

import MaintenanceConfirmScreen from '../screens/MaintenanceConfirmScreen';
import MaintenanceSelectionScreen from '../screens/MaintenanceSelectionScreen';
import CheckListScreen from '../screens/CheckListScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackContext from '../../context/StackContext';
import DrawerContext from '../../context/DrawerContext';

const Stack = createNativeStackNavigator();

export default function MaintenanceNavigation({ navigation, route }) {

const { setActiveDrawerSection } = React.useContext(DrawerContext);

// Se ejecuta cuando se navega al MaintenanceNavigation con parametros.
React.useEffect(() => {
  if (route.params) {
    const { targetScreen, origin, data } = route.params;

    if (origin && navigation) {
      const goBackToOrigin = { method: () => { 
          setActiveDrawerSection(origin);
          navigation.navigate(origin);
        } 
      } 
      // Se guarda el metodo para volver al origen en el Contexto del Stack.
      setGoBackToOrigin(goBackToOrigin);
      var needGoBackToOrigin = true;
    } 

    // Enrutando a la pantalla target
    if (targetScreen === "MaintenanceConfirm") 
      if (navigation) 
        navigation.navigate("MaintenanceConfirm", { selectedEquipment: data.equipmentId, needGoBackToOrigin: needGoBackToOrigin });
  }
}, [route.params]);

// Creando el estado del Stack que almacena el metodo navigation.goBack().
const [ goBack, setGoBack ] = React.useState({ method: null });
const [ goBackToOrigin, setGoBackToOrigin ] = React.useState({ method: null });

  return (
    <StackContext.Provider
      value={{ 
        goBack: goBack, 
        setGoBack: setGoBack,
        goBackToOrigin: goBackToOrigin,
        setGoBackToOrigin: setGoBackToOrigin,
      }}>
      <Stack.Navigator
        initialRouteName={"MaintenanceSelection"}
        screenOptions={{ title: "Mantenimiento", headerTitleAlign: "center", headerShown: false }}>
        <Stack.Screen name="MaintenanceSelection" component={MaintenanceSelectionScreen} />
        <Stack.Screen name="MaintenanceConfirm" component={MaintenanceConfirmScreen} />
        <Stack.Screen name="CheckList" component={CheckListScreen} />
      </Stack.Navigator> 
    </StackContext.Provider>
     
  )
}