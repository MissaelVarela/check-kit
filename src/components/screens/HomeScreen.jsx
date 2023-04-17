import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import theme from '../../utils/theme.js';
import Sesion from '../../utils/Sesion.js';

import Subtitle from '../core/Subtitle.jsx';
import Notification from '../integrated/Notification.jsx';
import MessageDialog from '../integrated/MessageDialog.jsx'
import ConfirmDialog from '../integrated/ConfirmDialog.jsx'
import Button from '../core/Button.jsx';
import Section from '../integrated/Section.jsx';

export default function HomeScreen() {

    const userName = Sesion.getName()
    const [ visibleMsg, setVisibleMsg ] = React.useState(false);
    const [ visibleCfm, setVisibleCfm ] = React.useState(false);

    return (
        <View style={styles.screen}>
            <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
                <Subtitle>
                    ¡Bienvenido <Text style={{fontWeight: theme.fontWeights.bold}}>{userName}</Text>!
                </Subtitle> 
                <Section
                    style={[styles.section, {marginTop: 60}]}
                    title="Accesos rapidos">

                </Section>
                <Section
                    style={styles.section}
                    title="Botones de prueba">
                    <View style={{ width: "100%", height: 150, paddingTop: 30, alignItems: "center", justifyContent: "space-around" }}>
                        <Button onPress={() => setVisibleMsg(true)}>Press me!</Button>
                        <Button onPress={() => setVisibleCfm(true)}>Press me too!</Button>
                    </View>
                </Section>
                
            </ScrollView>
            <MessageDialog 
                title="" 
                text="¡Hola soy un mensaje para el usuario!"
                visible={visibleMsg} 
                setVisible={setVisibleMsg} />
            <ConfirmDialog 
                title="Aviso" 
                text="Toca mantenimiento"
                visible={visibleCfm} 
                setVisible={setVisibleCfm} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        //alignItems: "center",
        backgroundColor: theme.colors.light,
    },
    body: {
        width: "100%",
        padding: 25,
    },
    bodyContent: {
        alignItems: "center",
    },
    section: {
        maxWidth: "100%"
    }
});
