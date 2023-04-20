import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import sources from '../../utils/sources.js';
import Sesion from '../../utils/Sesion.js';
import theme from '../../utils/theme.js';

import IconButton from '../core/IconButton';
import DrawerMenuItem from '../core/DrawerMenuItem.jsx';

import { DrawerContext } from '../navigation/MainNavigation.jsx';

export default function DrawerMenu(props) {

    const { navigation, isLargeScreen } = props;

    // Cachando el contexto del estado seccion activa del drawer
    const { activeDrawerSection, setActiveDrawerSection } = React.useContext(DrawerContext);

    const [ expandableVisibility, setExpandableVisibility ] = React.useState(false);

    return (
            <View style={styles.drawer}>
                <View style={styles.drawerHeader}>
                    { !isLargeScreen 
                    ?   <IconButton 
                            icon={sources.icons.menu}
                            onPress={navigation.closeDrawer} /> 
                    : null }
                </View>
                <ScrollView style={styles.drawerBody}>
                    <DrawerMenuItem
                        text="Inicio"
                        icon={sources.icons.home}
                        onPress={() => {setActiveDrawerSection("Home"); navigation.navigate("Home")}}
                        isActive={activeDrawerSection === "Home"} /> 
                    <DrawerMenuItem
                        text="Equipos medicos"
                        icon={sources.icons.equipment}
                        onPress={() => {setActiveDrawerSection("CatalogNav"); navigation.navigate("CatalogNav")}}
                        isActive={activeDrawerSection === "CatalogNav"}
                        expandable
                        onExpandablePress={() => setExpandableVisibility(!expandableVisibility)}/> 
                    {
                        expandableVisibility 
                        ?
                            <DrawerMenuItem
                                text="Laboratorio Medico"
                                onPress={() => {setActiveDrawerSection("CatalogNav/LaboratiorioMedico"); navigation.navigate("CatalogNav", {area: "LaboratorioMedico"})}}
                                isActive={activeDrawerSection === "CatalogNav/LaboratiorioMedico"}
                                textStyle={{fontSize: theme.fontSizes.subtitle, fontWeight: theme.fontWeights.regular}}/> 
                        :
                            null
                    }
                    
                    {
                        expandableVisibility
                        ?
                            <DrawerMenuItem
                                text="Laboratorio Practicas"
                                onPress={() => {setActiveDrawerSection("CatalogNav/LaboratiorioPracticas"); navigation.navigate("CatalogNav", {area: "LaboratorioPracticas"})}}
                                isActive={activeDrawerSection === "CatalogNav/LaboratiorioPracticas"}
                                textStyle={{fontSize: theme.fontSizes.subtitle, fontWeight: theme.fontWeights.regular}}/> 
                        :
                            null
                    }

                    <DrawerMenuItem
                        text="Agenda"
                        icon={sources.icons.datebook}
                        onPress={() => {setActiveDrawerSection("DatebookNavigation"); navigation.navigate("DatebookNavigation")}}
                        isActive={activeDrawerSection === "DatebookNavigation"} /> 
                    
                    {
                        (Sesion.getUserType() === 1 || Sesion.getUserType() === 2)
                        ? 
                        <DrawerMenuItem
                            text="Mantenimiento"
                            icon={sources.icons.maintenance}
                            onPress={() => {setActiveDrawerSection("MaintenanceNavigation"); navigation.navigate("MaintenanceNavigation")}}
                            isActive={activeDrawerSection === "MaintenanceNavigation"} /> 
                        :
                        null
                    }
                    
                </ScrollView> 
            </View>
    )

}

const styles = StyleSheet.create({
    drawer: {
        marginTop: Constants.statusBarHeight, 
    },
    drawerHeader: {
        height: 60,
        paddingLeft: 12,
        justifyContent: "center"
    },
    drawerBody: {
        marginTop: 40,
        paddingLeft: 0,
    },
})