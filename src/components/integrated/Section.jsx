import { View, Text, StyleSheet } from 'react-native';
import Subtitle from '../core/Subtitle';

import theme from '../../utils/theme';

export default function Section(props){

    const { title, style, contentStyle, children, showLine = true } = props;

    return(
        <View style={[styles.main, style]}>
            <Subtitle style={styles.title}>{title}</Subtitle>
            <View style={[styles.linea, showLine && {backgroundColor: theme.colors.lightDark}]}/>
            <View style={contentStyle}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        minWidth: 40,
        maxWidth: 600,
        marginBottom: 80,
    },
    title: {
        fontSize: 20
    },
    linea: {
        marginTop: 5,
        marginBottom: 10,
        width: "100%", 
        height: 2, 
    },
})