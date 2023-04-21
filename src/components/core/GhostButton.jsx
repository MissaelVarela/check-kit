import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default function GhostButton(props) {

    const { text, onPress, children, style } = props;

    return(
        <TouchableHighlight
            style={[styles.button, style]}
            onPress={onPress}
            underlayColor={theme.colors.secundary}>

            <Text style={styles.text}>
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
        //backgroundColor: theme.colors.light,
        borderWidth: 2,
        borderColor: theme.colors.dark,
        alignItems: "center"
    },
    text: {
        color: theme.colors.dark,
        fontSize: theme.fontSizes.buttonText,
        fontWeight: theme.fontWeights.semiBold,
    }
})