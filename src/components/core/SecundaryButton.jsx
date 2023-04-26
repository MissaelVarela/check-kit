import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import theme from '../../utils/theme';
import React from 'react';

export default function SecundaryButton(props) {

    const { text, onPress, children, style, noEnable, setNoEnable } = props;
 
    return(
        <TouchableHighlight
            style={[styles.button, noEnable ? styles.noEnable : styles.enable, style]}
            onPress={() => !noEnable && onPress && onPress()}
            
            underlayColor={theme.colors.darkLight}>

            <Text style={[styles.text, noEnable ? {color: theme.colors.lightDark} : {color: theme.colors.dark}]}>
                { children ? children : text }
            </Text>
       
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center"
    },
    enable: {
        backgroundColor: theme.colors.lightDark,
    },
    noEnable: {
        backgroundColor: theme.colors.darkLight,
    },
    text: {
        fontSize: theme.fontSizes.buttonText,
        fontWeight: theme.fontWeights.semiBold,
    }
})