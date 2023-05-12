import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

import theme from '../../../utils/theme';
import sources from '../../../utils/sources';
import { toTimeString } from '../../../utils/dateFormat';

import Icon from '../Icon';
import TimePickerModal from './TimePickerModal';

export default function TimePicker({ style, value = new Date(), setValue, visible, setVisible}) {
    
    return (
        <View style={style}>
            <TouchableHighlight 
                style={styles.container}
                underlayColor={"rgba(200, 200, 200, 0.25)"}
                onPress={() => setVisible && setVisible(true)}>
                    <>
                        <Text numberOfLines={1} style={[styles.text]}>
                            {toTimeString(value)}
                        </Text>
                        <Icon
                            icon={sources.icons.clock}
                            small /> 
                    </>        
            </TouchableHighlight>

            <TimePickerModal
                value={value}
                setValue={setValue}
                visible={visible}
                setVisible={setVisible} />

        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
        backgroundColor: theme.colors.light,
        borderColor: theme.colors.darkLight,
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    text: {
        flex: 1,
        marginRight: 10,
    },
});