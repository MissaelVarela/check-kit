import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../utils/theme.js';
import sources from '../../utils/sources.js';

import IconButton from '../core/IconButton.jsx'
import Title from '../core/Title.jsx';

import DrawerContext from '../../context/DrawerContext.js';
import StackContext from '../../context/StackContext.js';

export default function HeaderBar(props) {

    const { openDrawer, isLargeScreen } = React.useContext(DrawerContext);
    const { goBack, goBackToOrigin } = React.useContext(StackContext);

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
            case 'none':
                return <View style={{width: 36}}/>;
            default:
                return <View style={{width: 36}}/>;
        }
    }

    return(
        <>
            <View style={[{height: Constants.statusBarHeight}, !transparent &&  { backgroundColor: theme.colors.light }]}/>
            <View style={[styles.header, !transparent && { backgroundColor: theme.colors.light, borderBottomWidth: 2 }, style]}>
                
                <View style={styles.bar}>
                    {
                        isLargeScreen && buttonType === "menu"
                            ? selectButtonType("none")
                            : selectButtonType(buttonType)
                    }
                    <Title style={{ fontWeight: theme.fontWeights.semiBold }}>{children ? children : title}</Title>
                    <View style={{width: 36}}/>
                </View>
            </View>
        </>
        
    )

}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 65,
        borderBottomColor: theme.colors.lightDark,
    },
    bar: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});