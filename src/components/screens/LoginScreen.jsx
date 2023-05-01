import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../utils/theme.js';

import Button from '../core/Button.jsx'
import Title from '../core/Title.jsx'
import Logo from '../core/Logo.jsx'
import TextField from '../core/TextField.jsx'
import MessageDialog from '../integrated/MessageDialog.jsx';

import { login } from '../../utils/auth.js';

export default function LoginScreen({navigation}) {

    const [userText, setUserText] = React.useState("");
    const [passText, setPassText] = React.useState("");
    const [messageText, setMessageText] = React.useState("");

    // Creando los objetos que tendran referencia algunos componentes hijo:
    const messageDialog = { setVisible: () => {} };

    async function buttonAction() {
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
        
    };

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
            <View style={styles.login}>
                <Logo/>
                <Title 
                    text="Check Kit"/>
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
                    onPress={buttonAction}/> 
            </View>
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
        height: 320,
        borderRadius: 10,
        backgroundColor: theme.colors.lightDark,
        padding: 22,

        justifyContent: "space-around",
        alignItems: "center",
    },
});