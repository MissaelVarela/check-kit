import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../utils/theme.js';
import auth from '../../utils/auth.js';

import Button from '../core/Button.jsx'
import Tittle from '../core/Title.jsx'
import Logo from '../core/Logo.jsx'
import TextField from '../core/TextField.jsx'
import MessageDialog from '../integrated/MessageDialog.jsx';

export default function LoginScreen({navigation}) {

    const [userText, setUserText] = React.useState("");
    const [passText, setPassText] = React.useState("");

    // Creando los objetos que tendran referencia algunos componentes hijo:
    const messageDialog = { setVisible: () => {} };

    function buttonAction() {
        if(!userText || !passText) {
            messageDialog.setVisible(true);
            return;
        }
        
        const result = auth(userText, passText);

        if(result){
            if (navigation) navigation.navigate("Main");
        }
        else {
            alert("Ey tu contraseña o usuario esta incorrecta ponte pilas")
        }

        
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
            <MessageDialog
                title="Aviso"
                text={"Campo vacio.\nPor favor ingresa tu usuario y contraseña."}
                reference={messageDialog} />
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
        width: "75%",
        maxWidth: 350,
        height: 320,
        borderRadius: 10,
        backgroundColor: theme.colors.lightDark,
        padding: 22,

        justifyContent: "space-around",
        alignItems: "center",
    },
});