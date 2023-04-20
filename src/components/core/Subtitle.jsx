import { Text, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default function Subtitle(props) {

    const { text, numberOfLines, style, children } = props;
    const heightStyle = !children && !text ? { height: 0 } : {};

    return (
        <Text style={[styles.text, heightStyle, style]} numberOfLines={numberOfLines}>
            { children ? children : text }
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.subtitle,
        fontWeight: theme.fontWeights.regular,
        color: theme.colors.dark,
    }
})