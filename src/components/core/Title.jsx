import { Text, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default function Title(props) {

    const { text, style, children } = props;
    const heightStyle = !children && !text ? { height: 0 } : {};

    return (
        <Text style={[styles.text, heightStyle, style]}>
            { children ? children : text }
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.title,
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.dark,
    }
})