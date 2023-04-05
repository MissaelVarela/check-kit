import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../utils/theme.js';

import Sesion from '../../utils/Sesion.js';

import Button from '../core/Button.jsx'
import Tittle from '../core/Title.jsx'
import Logo from '../core/Logo.jsx'
import TextField from '../core/TextField.jsx'

export default function LoginScreen({navigation}) {

    const [userText, setUserText ] = React.useState("");
    const [passText, setPassText ] = React.useState("");

    function buttonAction() {
        if(!userText || !passText) {
            alert("Campo vacio. Por favor ingresa tu usuario y contraseña.");
            return;
        }
        
        Sesion.setName(userText)
        Sesion.setPass(passText)

        navigation.navigate("Main")
    };

    return (
        <LinearGradient style={styles.screen}
            colors={[theme.colors.light, theme.colors.tertiary, theme.colors.primary]}>
            <View style={styles.login}>
                <Logo/>
                <Tittle 
                    text="Check Kit"/>
                <TextField 
                    placeHolder="Usuario" 
                    onTextChange={setUserText}/>
                <TextField 
                    placeHolder="Contraseña" 
                    onTextChange={setPassText} 
                    password/>
                <Button 
                    style={{marginTop: 15}}
                    text="Iniciar sesión" 
                    onPress={buttonAction}/> 
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.tertiary,
    },
    login: {
        width: 280,
        height: 320,
        borderRadius: 10,
        backgroundColor: theme.colors.lightDark,
        padding: 22,

        justifyContent: "space-around",
        alignItems: "center",
    },
});