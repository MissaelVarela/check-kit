import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../utils/theme.js';
import sources from '../../utils/sources.js';

import IconButton from '../core/IconButton.jsx'
import Title from '../core/Title.jsx';

import DrawerContext from '../../context/DrawerContext.js';
import StackContext from '../../context/StackContext.js';

export default function HeaderBar(props) {

    const { openDrawer, isLargeScreen } = React.useContext(DrawerContext);
    const { goBack, goBackToOrigin, pop } = React.useContext(StackContext);

    const { title, children, buttonType, transparent, needGoBackToOrigin, stackNavigation, style } = props;

    function selectButtonType(type) {
        switch(type) {
            case 'menu':
                return <IconButton icon={sources.icons.menu} onPress={() => { openDrawer && openDrawer.method() }}/>;
            case 'back': 
                return <IconButton icon={sources.icons.arrow_left} onPress={() => { 
                    if (needGoBackToOrigin && goBackToOrigin && goBackToOrigin.method) {
                        // Reiniciar el stack actual
                        if (stackNavigation){
                            stackNavigation.popToTop();
                        }
                        // Regresar al origin
                        goBackToOrigin.method();
                        goBackToOrigin.method = null;
                    } 
                    else {
                        goBack && goBack.method();
                    }
                    
                }}/>;
            case 'pop': 
                return <IconButton icon={sources.icons.arrow_left} onPress={() => { 
                    if (needGoBackToOrigin && goBackToOrigin && goBackToOrigin.method) {
                        // Reiniciar el stack actual
                        if (stackNavigation){
                            stackNavigation.popToTop();
                        }
                        // Regresar al origin
                        goBackToOrigin.method();
                        goBackToOrigin.method = null;
                    } 
                    else {
                        pop && pop.method();
                    }
                    
                }}/>;
            case 'none':
                return <View style={{width: 36}}/>;
            default:
                return <View style={{width: 36}}/>;
        }
    }

    // Quitar el espacio?
    // Centrar el text button invitado YA
    // Cambiar el nombre y paque de la app YA
    // Cambiar las imagenes de blanco y negro a color YA
    // Mas pequeña la imagen del icono de la app YA

    //<View style={[{height: Constants.statusBarHeight}, !transparent &&  { backgroundColor: theme.colors.light }]}/>

    return(
        <View style={{width: "100%"}}>
            <StatusBar
                backgroundColor={theme.colors.light}
                barStyle={"dark-content"} />
            <View style={[styles.header, !transparent && { backgroundColor: theme.colors.light, borderBottomWidth: 2 }, style]}>
                {
                    isLargeScreen && buttonType === "menu"
                        ? selectButtonType("none")
                        : selectButtonType(buttonType)
                }
                <Title style={{ fontWeight: theme.fontWeights.semiBold }}>{children ? children : title}</Title>
                <View style={{ width: 36 }} />
            </View>
        </View>
        
    )

}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 65,
        borderBottomColor: theme.colors.lightDark,
        paddingHorizontal: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});