import MaintenanceConfirmScreen from '../screens/MaintenanceConfirmScreen';
import MaintenanceSelectionScreen from '../screens/MaintenanceSelectionScreen';
import CheckListScreen from '../screens/CheckListScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MaintenanceNavigation() {
  return (
    <Stack.Navigator
        screenOptions={{title: "Mantenimiento", headerTitleAlign: "center"}}>
        <Stack.Screen name="MaintenanceSelection" component={MaintenanceSelectionScreen} options={{headerShown: false}}/>
        <Stack.Screen name="MaintenanceConfirm" component={MaintenanceConfirmScreen}/>
        <Stack.Screen name="CheckList" component={CheckListScreen}/>
    </Stack.Navigator>  
  )
}