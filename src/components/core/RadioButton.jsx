import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../utils/theme';
import React from 'react';

export default function RadioButton(props) {

    // selected es el estado grupal (opcional) para saber si grupalmente esta seleccionado.
    // myIndex es un identificador (opcional) para identificar el componente en un grupo.
    const { text, myIndex, selected, onChecked, onUnchecked, children, style } = props;

    // checked es el estado local del componente para saber si esta checked.
    const [checked, setChecked] = React.useState(false);

    function onPress() {
        if (checked) {
            // Quitando check.
            setChecked(false);
            onUnchecked && onUnchecked();
        }
        else {
            // Poniendo check.
            setChecked(true);
            onChecked && onChecked();
        }
    }

    React.useEffect(() => {
        if (selected === myIndex) {

        }
        else {
            // Si el seleccionado grupalmente no soy yo, pon mi estado de check en falso.
            setChecked(false);
        }
    }, [selected])

    return(
        <TouchableOpacity
            style={style}
            onPress={onPress}
            underlayColor={theme.colors.secundary}>

            <View style={[styles.container, 
                checked
                ? {borderColor: theme.colors.primary}
                : {borderColor: theme.colors.light}]}>
                <View style={[styles.checkbox, checked ? styles.checked : styles.unchecked]}/>

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