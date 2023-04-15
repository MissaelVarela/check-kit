import 'react-native-gesture-handler';

import Auth from './src/components/navigation/Auth.jsx';
import Main from './src/components/navigation/Main.jsx';
import CatalogNav from './src/components/navigation/CatalogNav.jsx';

import LoginScreen from './src/components/screens/LoginScreen.jsx'
import HomeScreen from './src/components/screens/HomeScreen.jsx';
import CatalogScreen from './src/components/screens/CatalogScreen.jsx';
import EquipmentScreen from './src/components/screens/EquipmentScreen.jsx';

import { NavigationContainer } from '@react-navigation/native';
import DatebookScreen from './src/components/screens/DatebookScreen.jsx';
import DatebookSelectionScreen from './src/components/screens/DatebookSelectionScreen.jsx';
import MaintenanceSelectionScreen from './src/components/screens/MaintenanceSelectionScreen.jsx';
import MaintenanceConfirmScreen from './src/components/screens/MaintenanceConfirmScreen.jsx';

export default function App() {
  
  return (
    <NavigationContainer>
      <Auth/>
    </NavigationContainer>
  );
}
