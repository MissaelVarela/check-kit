import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import theme from '../../utils/theme.js';
import Sesion from '../../utils/Sesion.js';

import Subtitle from '../core/Subtitle.jsx';
import Notification from '../integrated/Notification.jsx';
import Button from '../core/Button.jsx';

export default function HomeScreen() {

    const userName = Sesion.getName()
    const [ visible, setVisible ] = React.useState(false);

    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.body}>
                <Subtitle>
                    ¡Bienvenido de nuevo <Text style={{fontWeight: theme.fontWeights.bold}}>{userName}</Text> !
                </Subtitle> 
                <View style={{width: "100%", paddingTop: 30, alignItems: "center"}}>
                    <Button onPress={() => setVisible(true)}>Press me!</Button>    
                </View>
            </ScrollView>
            <Notification visible={visible} setVisible={setVisible}>Hola a todos!</Notification>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
        backgroundColor: theme.colors.light,
    },
    body: {
        padding: 15,
        alignItems: "flex-start",
    }
});
