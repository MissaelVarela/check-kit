import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import sources from '../../utils/sources.js';

import IconButton from '../core/IconButton';
import DrawerMenuItem from '../core/DrawerMenuItem.jsx';
import theme from '../../utils/theme.js';

export default function DrawerMenu(props) {

    const { navigation, isLargeScreen } = props;
    const [ active, setActive ] = React.useState("Home");
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
                        onPress={() => {setActive("Home"); navigation.navigate("Home")}}
                        isActive={active === "Home"}
                        setActive={setActive}/> 
                    <DrawerMenuItem
                        text="Equipos medicos"
                        icon={sources.icons.equipment}
                        onPress={() => {setActive("CatalogNav"); navigation.navigate("CatalogNav")}}
                        isActive={active === "CatalogNav"}
                        setActive={setActive}
                        expandable
                        onExpandablePress={() => setExpandableVisibility(!expandableVisibility)}/> 
                    {
                        expandableVisibility 
                        ?
                            <DrawerMenuItem
                                text="Laboratorio Medico"
                                onPress={() => {setActive("CatalogNav/LaboratiorioMedico"); navigation.navigate("CatalogNav", {area: "LaboratorioMedico"})}}
                                isActive={active === "CatalogNav/LaboratiorioMedico"}
                                setActive={setActive}
                                textStyle={{fontSize: theme.fontSizes.subtitle, fontWeight: theme.fontWeights.regular}}/> 
                        :
                            null
                    }
                    
                    {
                        expandableVisibility
                        ?
                            <DrawerMenuItem
                                text="Laboratorio Practicas"
                                onPress={() => {setActive("CatalogNav/LaboratiorioPracticas"); navigation.navigate("CatalogNav", {area: "LaboratorioPracticas"})}}
                                isActive={active === "CatalogNav/LaboratiorioPracticas"}
                                setActive={setActive}
                                textStyle={{fontSize: theme.fontSizes.subtitle, fontWeight: theme.fontWeights.regular}}/> 
                        :
                            null
                    }

                    <DrawerMenuItem
                        text="Agenda"
                        icon={sources.icons.datebook}
                        onPress={() => {setActive("DatebookNavigation"); navigation.navigate("DatebookNavigation")}}
                        isActive={active === "DatebookNavigation"}
                        setActive={setActive}/> 
                    <DrawerMenuItem
                        text="Mantenimiento"
                        icon={sources.icons.maintenance}
                        onPress={() => {setActive("MaintenanceNavigation"); navigation.navigate("MaintenanceNavigation")}}
                        isActive={active === "MaintenanceNavigation"}
                        setActive={setActive}/> 
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