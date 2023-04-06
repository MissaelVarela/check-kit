import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default function TextButton(props) {

    const { text, onPress, children, style } = props;

    return(
        <TouchableOpacity
            style={[styles.textButton, style]}
            onPress={onPress}
            underlayColor={theme.colors.secundary}>

            <Text style={styles.text}>
                { children ? children : text }
            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textButton: {
        paddingHorizontal: 25,
    },
    text: {
        color: theme.colors.primary,
        fontSize: theme.fontSizes.text,
        fontWeight: theme.fontWeights.semiBold,
    }
})