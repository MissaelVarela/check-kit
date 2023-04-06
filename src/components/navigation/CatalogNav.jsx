import CatalogScreen from '../screens/CatalogScreen';
import EquipmentScreen from '../screens/EquipmentScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CatalogNav({navigation}) {
  return (
    <Stack.Navigator
        screenOptions={{title: "Equipos medicos", headerTitleAlign: "center"}}>
        <Stack.Screen name="Catalog" component={CatalogScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Equipment" component={EquipmentScreen}/>
    </Stack.Navigator>  
  )
}