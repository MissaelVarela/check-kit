import React from 'react';
import {useWindowDimensions } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import CatalogScreen from '../screens/CatalogScreen';
import CatalogNav from './CatalogNav';
import DatebookScreen from '../screens/DatebookScreen';
import MaintenanceScreen from '../screens/MaintenanceScreen';

import DrawerMenu from '../integrated/DrawerMenu';

import { createDrawerNavigator } from '@react-navigation/drawer';
import theme from '../../utils/theme';

const Drawer = createDrawerNavigator();

export default function Main() {

    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;

    return (
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
            <Drawer.Screen name="CatalogNav" component={CatalogNav} options={{ title: "Equipos medicos" }} />
            <Drawer.Screen name="Datebook" component={DatebookScreen} options={{ title: "Agenda" }} />
            <Drawer.Screen name="Maintenance" component={MaintenanceScreen} options={{ title: "Mantenimiento" }} />
        </Drawer.Navigator>
    )
}