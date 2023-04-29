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

import DrawerMenu from '../integrated/DrawerMenu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContext from '../../context/DrawerContext';
import CheckListLogScreen from '../screens/CheckListLogScreen';

// Creamos el Drawer.
const Drawer = createDrawerNavigator();

export default function MainNavigation() {

    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 1000;

    const [ activeDrawerSection, setActiveDrawerSection ] = React.useState("Home");

    return (
        <DrawerContext.Provider 
            value={{ activeDrawerSection: activeDrawerSection, setActiveDrawerSection: setActiveDrawerSection }}>
            <Drawer.Navigator
                drawerContent={(props) => <DrawerMenu {...props} isLargeScreen={isLargeScreen} />}
                screenOptions={{
                    drawerActiveTintColor: theme.colors.primary,
                    drawerType: isLargeScreen ? 'permanent' : 'front',
                    headerLeft: isLargeScreen ? () => <></> : null,
                    //headerRight: null, // Agregar el boton de perfil... 
                    headerTitleAlign: 'center',
                    drawerStyle: {
                        width: 340,
                    },
                }}>
                <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
                <Drawer.Screen name="CatalogNav" component={CatalogNavigation} options={{ title: "Equipos medicos" }} />
                <Drawer.Screen name="DatebookNavigation" component={DatebookNavigation} options={{ title: "Agenda" }} />
                <Drawer.Screen name="MaintenanceNavigation" component={MaintenanceNavigation} options={{ title: "Mantenimiento" }} />
                <Drawer.Screen name="CheckListLog" component={CheckListLogScreen} options={{ title: "Registros" }} />
            </Drawer.Navigator>
        </DrawerContext.Provider>
        
    )
}