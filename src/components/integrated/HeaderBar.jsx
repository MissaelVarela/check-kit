import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../utils/theme.js';
import sources from '../../utils/sources.js';

import IconButton from '../core/IconButton.jsx'
import Title from '../core/Title.jsx';

export default function HeaderBar(props) {

    const { title, style } = props;
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return(
        <View style={[styles.header, style]}>
            <View style={styles.bar}>
                <IconButton icon={sources.icons.menu} onPress={() => setIsMenuOpen(true)}/>
                <Title style={{fontSize: 16}}>{title}</Title>
                <IconButton icon={sources.icons.profile}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 60,
        borderBottomColor: theme.colors.lightDark,
        borderBottomWidth: 2,
        backgroundColor: theme.colors.light,
    },
    bar: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});