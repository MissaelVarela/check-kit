import React from 'react';
import { View, StyleSheet,StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../utils/theme.js';

import Button from '../core/Button.jsx'
import Title from '../core/Title.jsx'
import Logo from '../core/Logo.jsx'
import TextField from '../core/TextField.jsx'
import MessageDialog from '../integrated/MessageDialog.jsx';

import { login, loginAsInvited } from '../../utils/auth.js';
import TextDefault from '../core/TextDefault.jsx';
import TextButton from '../core/TextButton.jsx';

const version = "0.1.0";

export default function LoginScreen({navigation}) {

    const [userText, setUserText] = React.useState("");
    const [passText, setPassText] = React.useState("");
    const [messageText, setMessageText] = React.useState("");

    // Creando los objetos que tendran referencia algunos componentes hijo:
    const messageDialog = { setVisible: () => {} };

    async function tryLogin() {
        if(!userText || !passText) {
            setMessageText("Campo vacío.\nPor favor ingresa tu usuario y contraseña.");
            messageDialog.setVisible(true);
            return;
        }
        
        try {
            let authenticated = await login(userText, passText);

            if(authenticated){
                if (navigation) navigation.navigate("Main");
            }
        }
        catch(error) {
            setMessageText("No se pudo iniciar sesión.\n" + error.message);
            messageDialog.setVisible(true);
        }
        
    }

    function invitedLogin() {
        loginAsInvited();
        if (navigation) navigation.navigate("Main");
    }

    // Cuando se le hace focus al LoginScreen.
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setUserText("");
            setPassText("");
        });
    
        return unsubscribe;
      }, [navigation]);;

    return (
        <LinearGradient style={styles.screen}
            colors={[theme.colors.light, theme.colors.tertiary, theme.colors.primary]}>
            <StatusBar
                backgroundColor={theme.colors.light}
                barStyle={"dark-content"} />

            <View style={styles.login}>
                <View style={styles.logoContainer}>
                    <Logo/>
                    <Title 
                        text="Check Kit"/>
                </View>
                <TextField 
                    value={userText}
                    placeHolder="Usuario" 
                    onTextChange={setUserText}/>
                <TextField 
                    value={passText}
                    placeHolder="Contraseña" 
                    onTextChange={setPassText} 
                    password/>
                <Button 
                    style={{marginTop: 15}}
                    text="Iniciar sesión" 
                    onPress={tryLogin}/> 
                <View style={{flexDirection: "row", alignItems: "center", marginTop: 10}}>
                    <TextDefault>o ingresar como </TextDefault>
                    <TextButton onPress={invitedLogin}>invitado</TextButton>
                </View>
                
                
            </View>

            <TextDefault style={styles.version}>versión {version}</TextDefault>

            <MessageDialog
                title="Aviso"
                text={messageText}
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
        height: 400,
        borderRadius: 20,
        backgroundColor: theme.colors.lightDark,
        paddingVertical: 20,
        paddingHorizontal: 25,

        justifyContent: "space-around",
        alignItems: "center",
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 15,
    },
    version: {
        position: "absolute",
        right: 25,
        bottom: 15,
        fontSize: theme.fontSizes.smallText,
        color: theme.colors.secundary,
    }
});