import DatebookScreen from '../screens/DatebookScreen';
import DatebookSelectionScreen from '../screens/DatebookSelectionScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function DatebookNavigation() {
  return (
    <Stack.Navigator
        screenOptions={{title: "Agenda", headerTitleAlign: "center"}}>
        <Stack.Screen name="DatebookSelection" component={DatebookSelectionScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Datebook" component={DatebookScreen}/>
    </Stack.Navigator>  
  )
}