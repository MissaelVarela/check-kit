import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import theme from '../../../utils/theme';

export default function Selector({ dataArray, current = 0, setCurrent, isCircular, minWidth, toText }) {
    
    // Creando el estado del valor actual del componente.
    //const [ current, setCurrent ] = React.useState(initialIndex);

    function up() {
        if (isUnderStack()) {
            if (isCircular) {
                setCurrent(dataArray.length - 1);
            }
        } else {
            setCurrent(current - 1);
        }
    }

    function down() {
        if (isOverStack()) {
            if (isCircular) {
                setCurrent(0);
            }
        } else {
            setCurrent(current + 1);
        }
        
    }

    function isOverStack() {
        return current + 1 >= dataArray.length;
    }

    function isUnderStack() {
        return current - 1 < 0;
    }

    return(
        <View style={[{flex: 1}, minWidth && {minWidth: minWidth}]}>
            <TouchableOpacity style={styles.selectorButton} onPress={up}>
                <Text style={[styles.selectorText, {color: theme.colors.darkLight}]}>
                {
                    isUnderStack() && isCircular
                    ?
                        toText ? toText(dataArray[dataArray.length - 1]) : dataArray[dataArray.length - 1]
                    :
                        toText ? toText(dataArray[current - 1]) : dataArray[current - 1]
                }
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectorButton}>
                <Text style={[styles.selectorText, {color: theme.colors.dark}]}>
                {
                    toText ? toText(dataArray[current]) : dataArray[current]
                }
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectorButton} onPress={down}>
                <Text style={[styles.selectorText, {color: theme.colors.darkLight}]}>
                {
                    isOverStack() && isCircular
                    ?
                        toText ? toText(dataArray[0]) : dataArray[0]
                    :
                        toText ? toText(dataArray[current + 1]) : dataArray[current + 1]
                }
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    selectorButton: {
        minHeight: 64,
        minWidth: 64,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 0,
    },
    selectorText: {
        fontSize: theme.fontSizes.title,
        fontWeight: theme.fontWeights.bold
    }
});