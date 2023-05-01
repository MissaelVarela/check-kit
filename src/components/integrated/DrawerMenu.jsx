import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import sources from '../../utils/sources.js';
import Sesion from '../../utils/Sesion.js';
import theme from '../../utils/theme.js';

import IconButton from '../core/IconButton';
import DrawerMenuItem from '../core/DrawerMenuItem.jsx';
import Logo from '../core/Logo.jsx';
import Title from '../core/Title.jsx';
import Subtitle from '../core/Subtitle.jsx';
import ConfirmDialog from './ConfirmDialog.jsx';

import DrawerContext from '../../context/DrawerContext'

export default function DrawerMenu(props) {

    const { navigation } = props;

    // Cachando los estados del contexto del Drawer.
    const { activeDrawerSection, setActiveDrawerSection, setOpenDrawer, isLargeScreen } = React.useContext(DrawerContext);
    
    // Agregando el metodo openDrawer para que se pueda utilizar en el contexto del Drawer.
    React.useEffect(() => {
        if (setOpenDrawer && navigation) {
            setOpenDrawer({ method: () => navigation.openDrawer() });
        }
    }, []);

    const [ expandableVisibility, setExpandableVisibility ] = React.useState(false);

    const logoutConfirmDialog = { setVisible: () => {} };

    function logout() {
        // Cerrar sesión aqui.
        navigation && navigation.navigate("Login");
    }

    return (
            <View style={styles.drawer}>
                <View style={styles.drawerHeader}>
                    <View>
                        { !isLargeScreen 
                        ?   <IconButton 
                                icon={sources.icons.menu}
                                onPress={navigation.closeDrawer} /> 
                        : null }
                    </View>
                    <View style={{alignItems: "center", paddingTop: 15}}>
                        <Logo />
                        <Title text="Check Kit" />
                    </View>
                    
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
                        onPress={() => {setActiveDrawerSection("CatalogNavigation"); navigation.navigate("CatalogNavigation")}}
                        isActive={activeDrawerSection === "CatalogNavigation"}
                        expandable
                        onExpandablePress={() => setExpandableVisibility(!expandableVisibility)}/> 
                    {
                        expandableVisibility 
                        ?
                            <DrawerMenuItem
                                text="Laboratorio ing. biomédica"
                                onPress={() => {setActiveDrawerSection("CatalogNavigation/LabBio"); navigation.navigate("CatalogNavigation", {area: "LabBio"})}}
                                isActive={activeDrawerSection === "CatalogNavigation/LabBio"}
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
                    {
                        (Sesion.getUserType() === 1 || Sesion.getUserType() === 2)
                        ? 
                        <DrawerMenuItem
                            text="Registros"
                            icon={sources.icons.checklist}
                            onPress={() => {setActiveDrawerSection("CheckListLog"); navigation.navigate("CheckListLog")}}
                            isActive={activeDrawerSection === "CheckListLog"} /> 
                        :
                        null
                    }
                    
                </ScrollView> 
                <View style={styles.drawerFooter}>
                    <IconButton 
                        icon={sources.icons.arrow_left}
                        onPress={() => {
                            // Llamando al confirmDialog para confirmar la operación.
                            logoutConfirmDialog.setVisible(true);
                        }} />
                    <Subtitle style={{marginLeft: 15}}>Cerrar sesión</Subtitle>
                </View>
                <ConfirmDialog
                        title="Confirmación"
                        text="Se cerrará la sesión."
                        reference={logoutConfirmDialog}
                        onConfirm={logout} />
            </View>
    )

}

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        marginTop: Constants.statusBarHeight, 
    },
    drawerHeader: {
        padding: 12,
        justifyContent: "center"
    },
    drawerBody: {
        marginTop: 40,
        paddingLeft: 0,
    },
    drawerFooter: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 25,
        height: 100,
    }
})