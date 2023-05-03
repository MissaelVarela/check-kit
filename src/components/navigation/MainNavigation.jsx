import React from 'react';
import {useWindowDimensions } from 'react-native'

import theme from '../../utils/theme';

import HomeScreen from '../screens/HomeScreen';
import CatalogScreen from '../screens/CatalogScreen';
import DatebookScreen from '../screens/DatebookScreen';
import MaintenanceScreen from '../screens/MaintenanceScreen';

import CatalogNavigation from './CatalogNavigation';
import MaintenanceNavigation from './MaintenanceNavigation';
import DatebookNavigation from './DatebookNavigation';
import LogNavigation from './LogNavigation';

import DrawerMenu from '../integrated/DrawerMenu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContext from '../../context/DrawerContext';

// Creamos el Drawer.
const Drawer = createDrawerNavigator();

export default function MainNavigation() {

    const dimensions = useWindowDimensions();

    // Creando los estado del Drawer que se compartiran en el DrawerContext.
    const [ openDrawer, setOpenDrawer ] = React.useState({ method: null });
    const [ activeDrawerSection, setActiveDrawerSection ] = React.useState("Home");
    const isLargeScreen = dimensions.width >= 1000;

    return (
        <DrawerContext.Provider 
            value={{ 
                    activeDrawerSection: activeDrawerSection, 
                    setActiveDrawerSection: setActiveDrawerSection,
                    openDrawer: openDrawer,
                    setOpenDrawer: setOpenDrawer,
                    isLargeScreen: isLargeScreen,
                    }}>
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={(props) => <DrawerMenu {...props}/>}
                screenOptions={{
                    headerShown: false,
                    drawerActiveTintColor: theme.colors.primary,
                    drawerType: isLargeScreen ? 'permanent' : 'front', 
                    drawerStyle: {
                        width: 340,
                    },
                }}>
                <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
                <Drawer.Screen name="CatalogNavigation" component={CatalogNavigation} options={{ title: "Equipos medicos" }} />
                <Drawer.Screen name="DatebookNavigation" component={DatebookNavigation} options={{ title: "Agenda" }} />
                <Drawer.Screen name="MaintenanceNavigation" component={MaintenanceNavigation} options={{ title: "Mantenimiento" }} />
                <Drawer.Screen name="LogNavigation" component={LogNavigation} options={{ title: "Registros" }} />
            </Drawer.Navigator>
        </DrawerContext.Provider>
        
    )
}