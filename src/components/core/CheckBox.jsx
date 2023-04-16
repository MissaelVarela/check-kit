import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../utils/theme';
import React from 'react';

export default function CheckBox(props) {

    const { text, onPress, children, style } = props;

    const [checked, setChecked] = React.useState(false);

    return(
        <TouchableOpacity
            style={style}
            onPress={() => setChecked(!checked)}
            underlayColor={theme.colors.secundary}>

            <View style={[styles.container, 
                checked 
                ? {borderColor: theme.colors.primary}
                : {borderColor: theme.colors.light}]}>
                <View style={[styles.checkbox, checked ? styles.checked : styles.unchecked]}>

                </View>
                <Text style={styles.text}>
                    {children ? children : text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: theme.colors.light,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        marginLeft: 10,
        color: theme.colors.dark,
        fontSize: theme.fontSizes.buttonText,
        fontWeight: theme.fontWeights.semiBold,
    },
    checkbox: {
        width: 16, 
        height: 16,
        backgroundColor: theme.colors.light,
        borderColor: theme.colors.darkLight,
        borderRadius: 100,
        borderWidth: 1,
    },
    unchecked: {
        backgroundColor: theme.colors.light,
        borderColor: theme.colors.darkLight,
    },
    checked: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    }
})