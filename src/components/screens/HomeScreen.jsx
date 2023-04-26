import React from 'react';
import { View, ScrollView, Text, Image, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native';

import theme from '../../utils/theme.js';
import Sesion from '../../utils/Sesion.js';

import Subtitle from '../core/Subtitle.jsx';
import MessageDialog from '../integrated/MessageDialog.jsx'
import ConfirmDialog from '../integrated/ConfirmDialog.jsx'
import Button from '../core/Button.jsx';
import Section from '../integrated/Section.jsx';
import sources from '../../utils/sources.js';
import Title from '../core/Title.jsx';
import TextDefault from '../core/TextDefault.jsx';
import Logo from '../core/Logo.jsx';

export default function HomeScreen() {

    const dimensions = useWindowDimensions();
    const isShortScreen = dimensions.width <= 350;

    const userName = Sesion.getName();

    return (
        <ImageBackground 
            style={styles.screen}
            source={sources.images.backgroundHome} >

            <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
                <View style={{ width: "100%", alignItems: "center"}}>
                    <View style={styles.blurContainer}>
                        <Subtitle>
                            ¡Bienvenido <Text style={{fontWeight: theme.fontWeights.bold}}>{userName}</Text>!
                        </Subtitle> 
                    </View>
                </View>
                
                <View style={styles.imagaBlurContainer}>
                    <Image 
                        source={sources.images.logo_text} 
                        style={styles.logoImage}
                        resizeMode='contain'/>
                </View>
                
                {
                    /*
                    <View style={[styles.blurContainer, styles.logoContainer]}>
                    <View style={{flex: 1, minWidth: 200}}>
                        <Title style={{fontSize: 64, textAlignVertical: "center"}}>Check kit</Title>
                        <TextDefault style={{fontWeight: theme.fontWeights.semiBold}}>Control de Mantenimiento de equipos médicos.</TextDefault>
                    </View>
                    <Logo size={144}/>
                    
                </View>
                    */
                }
                
                <Section
                    style={[styles.section, {marginTop: 60}]}
                    title="Accesos rápidos">
                </Section> 
            </ScrollView>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.light,
    },
    body: {
        width: "100%",
        padding: 25,
    },
    bodyContent: {
        alignItems: "flex-start",
    },
    section: {
        maxWidth: "100%"
    },
    logoContainer: {
        //width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: 100,
        paddingVertical: 30,
    },
    blurContainer: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.75)",
    },
    imagaBlurContainer: {
        maxWidth: "100%",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 100,
        backgroundColor: "rgba(255, 255, 255, 0.75)",
    },
    logoImage: {
        width: 400,
        maxWidth: "100%",
        height: 160,
    },
});
