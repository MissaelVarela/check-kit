import { Text, View, TouchableHighlight, TouchableWithoutFeedback, Modal, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from '../Icon';

import theme from '../../../utils/theme';
import sources from '../../../utils/sources';
import React from 'react';
import Title from '../Title';

export default function TimePicker({ style, reference, initialHour }) {

    const [ value, setValue ] = React.useState({ hours: null, minutes: null, representation: ""});
    const [ hoursValue, setHoursValue ] = React.useState({ text: initialHour, number: initialHour - 1 });
    const [ minutesValue, setMinutesValue ] = React.useState({ text: "00", number: 0 });
    const [ amPmValue, setAmPmValue ] = React.useState({ text: "am", number: 0 });
    const [ visible, setVisible ] = React.useState(false);

    React.useEffect(() => {
        const representation = hoursValue.text + ":" + minutesValue.text + " " + amPmValue.text;
        setValue({ hours: hoursValue, minutes: minutesValue, amPm: amPmValue, representation: representation});
    }, [hoursValue, minutesValue, amPmValue]);

    // Referenciando el valor
    if (reference) reference.value = value;

    return (
        <View style={style}>
            <TouchableHighlight 
                onPress={() => setVisible && setVisible(!visible)}
                style={styles.container}
                underlayColor={"rgba(200, 200, 200, 0.25)"}>
                    <>
                        <Text numberOfLines={1} style={[styles.text]}>
                            {value.representation}
                        </Text>
                        <Icon
                            icon={sources.icons.clock}
                            small /> 
                    </>        
            </TouchableHighlight>

            <Modal
                visible={visible}
                transparent={true}
                statusBarTranslucent={true}
                animationType="fade"
                onRequestClose={() => setVisible && setVisible(false)}>
                <TouchableWithoutFeedback
                    onPress={() => setVisible && setVisible(false)}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modal}>

                                {/* Contenido del Modal */}
                                <Selector
                                    initialIndex={initialHour - 1}
                                    isCircular
                                    value={hoursValue}
                                    setValue={setHoursValue}
                                    dataArray={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]} />
                                <View style={{justifyContent: "center"}}><Title style={{textAlignVertical: "center"}}>:</Title></View>
                                <Selector
                                    isCircular
                                    value={minutesValue}
                                    setValue={setMinutesValue}
                                    dataArray={["00", "15", "30", "45"]} />
                                <Selector
                                    value={amPmValue}
                                    setValue={setAmPmValue}
                                    dataArray={["am", "pm"]} />
                            </View>
                        </TouchableWithoutFeedback>
                        
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

        </View>

        
    )
}

function Selector({ dataArray, isCircular, value, setValue, initialIndex = 0 }) {
    
    const [ current, setCurrent ] = React.useState(initialIndex);

    React.useEffect(() => {
        setValue && setValue({text: dataArray[current], number: current});
    }, [current]);

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
        <View style={{flex: 1}}>
            <TouchableOpacity style={styles.selectorButton} onPress={up}>
                <Text style={[styles.selectorText, {color: theme.colors.darkLight}]}>
                {
                    isCircular 
                    ? 
                        // Si current - 1 es negativo no agregues nada.
                        isUnderStack() ? dataArray[dataArray.length - 1] : dataArray[current - 1]
                    :
                        // Si current - 1 es negativo no agregues nada.
                        isUnderStack() ? null : dataArray[current - 1]
                }
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectorButton}>
                <Text style={[styles.selectorText, {color: theme.colors.dark}]}>
                    {dataArray[current]}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectorButton} onPress={down}>
                <Text style={[styles.selectorText, {color: theme.colors.darkLight}]}>
                {
                    isCircular 
                    ? 
                        // Si current + 1 es mas grande que el tamaño del arreglo.
                        isOverStack()  ? dataArray[0] : dataArray[current + 1]
                    :
                        // Si current + 1 es mas grande que el tamaño del arreglo.
                        isOverStack() ? null : dataArray[current + 1]
                }
                </Text>
            </TouchableOpacity>
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
        //height: 32,
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 15,
    },
    text: {
        flex: 1,
        marginRight: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(52, 52, 52, 0.25)",
    },
    modal: {
        flexGrow: 0,
        flexDirection: "row",
        maxWidth: "80%",
        minHeight: 40,
        maxHeight: 500,
        borderRadius: 20,
        //paddingVertical: 5,
        backgroundColor: theme.colors.light,
        padding: 10

    },

    selectorButton: {
        minHeight: 64,
        minWidth: 64,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    selectorText: {
        fontSize: theme.fontSizes.title,
        fontWeight: theme.fontWeights.bold
    }
});