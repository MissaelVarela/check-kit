import { Text, StyleSheet } from 'react-native'

import theme from '../../utils/theme'

export default function TextDefault(props) {
    
    const { text, children, style } = props;

    return(
        <Text style={[styles.text, style]}>
            { children ? children : text }
        </Text>
    ) 
}

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.text,
        fontWeight: theme.fontWeights.regular,
        color: theme.colors.dark,
    }
})