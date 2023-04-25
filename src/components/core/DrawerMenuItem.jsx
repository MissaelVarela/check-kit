import React from 'react';
import { View, Text, Image, StyleSheet  } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';

import sources from '../../utils/sources';
import theme from '../../utils/theme';

import IconButton from './IconButton';

export default function DrawerMenuItem(props) {
    
    const { text, textStyle, icon, onPress, isActive, expandable, onExpandablePress} = props;

    // Estado del icono del boton expandible.
    const [ expanded, setExpanded ] = React.useState(false);

    return(
        <DrawerItem
            icon={() => <Image source={icon} style={styles.icon} />}
            style={isActive ? styles.itemActive : styles.itemInactive}
            onPress={onPress}
            label={ expandable ? () => 
                    <View style={styles.expandable}>
                        <Text
                            style={[styles.itemText, 
                                    textStyle, 
                                    isActive ? styles.itemTextActive : styles.itemTextInactive]}>
                            {text}
                        </Text>
                        <IconButton 
                            small
                            icon={expanded ? sources.icons.arrow_up : sources.icons.arrow_down} 
                            onPress={() => {
                                setExpanded(!expanded);
                                onExpandablePress && onExpandablePress();
                            }} />
                    </View>
                    : text }

            labelStyle={ expandable
                    ? null 
                    : [ styles.itemText, 
                        textStyle, 
                        isActive ? styles.itemTextActive : styles.itemTextInactive ]}
            />     
    )
}

const styles = StyleSheet.create({
    itemActive: {
        backgroundColor: theme.colors.quaternary,
    },
    itemInactive: {
        backgroundColor: theme.colors.light,
    },
    itemText: {
        fontSize: theme.fontSizes.title,
        fontWeight: theme.fontWeights.bold,
    },
    itemTextActive: {
        color: theme.colors.primary
    },
    itemTextInactive: {
        color: "#000"
    },
    icon: {
        height: 36, 
        width: 36,
    },
    expandable: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }

})


