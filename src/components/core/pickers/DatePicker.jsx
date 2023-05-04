import { Text, View, TouchableHighlight, TouchableWithoutFeedback, Modal, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from '../Icon';

import theme from '../../../utils/theme';
import sources from '../../../utils/sources';
import React from 'react';

export default function DatePicker({ style, reference }) {

    const [ value, setValue ] = React.useState({ hours: null, minutes: null, representationLarge: "", representationShort: ""});
    const [ yearValue, setYearValue ] = React.useState({ text: "2023", number: 0 });
    const [ monthValue, setMonthValue ] = React.useState({ text: "mayo", number: 4 });
    const [ dayValue, setDayValue ] = React.useState({ text: "4", number: 3 });
    const [ visible, setVisible ] = React.useState(false);

    // Arreglos
    const yearsArray = ["2023", "2024", "2025"];
    const monthsArray = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    // El arreglo del array depende del mes
    const [ daysArray, setDaysArray ] = React.useState(fillArray(31));
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // Cuando cambien el valor del mes
    React.useEffect(() => {
        const array = fillArray(monthDays[monthValue.number])
        setDaysArray(array);
    }, [monthValue])

    React.useEffect(() => {
        var month = (monthValue.number + 1) < 10 ? "0" + (monthValue.number + 1): (monthValue.number + 1);
        var day = (dayValue.text) < 10 ? "0" + (dayValue.text): (dayValue.text);
        const representationLarge = dayValue.text + " de " + monthValue.text + ", " + yearValue.text;
        const representationShort = yearValue.text + "-" + month + "-" + day;
        setValue({ 
            year: yearValue, 
            month: monthValue, 
            day: dayValue, 
            representationLarge: representationLarge,
            representationShort: representationShort,
        });
    }, [yearValue, monthValue, dayValue]);

    // Referenciando el valor
    if (reference) reference.value = value;

    function fillArray(count){
        const array = new Array();
        for (let index = 1; index <= count; index++) {
            array.push(index);
        }
        return array;
    }

    return (
        <View style={style}>
            <TouchableHighlight 
                onPress={() => setVisible && setVisible(!visible)}
                style={styles.container}
                underlayColor={"rgba(200, 200, 200, 0.25)"}>
                    <>
                        <Text numberOfLines={1} style={[styles.text]}>
                            {value.representationLarge}
                        </Text>
                        <Icon
                            icon={sources.icons.calendar}
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
                                    value={yearValue}
                                    setValue={setYearValue}
                                    dataArray={yearsArray} />
                                <Selector
                                    minWidth={90}
                                    initialIndex={4}
                                    isCircular
                                    value={monthValue}
                                    setValue={setMonthValue}
                                    dataArray={monthsArray} />
                                <Selector
                                    initialIndex={3}
                                    isCircular
                                    value={dayValue}
                                    setValue={setDayValue}
                                    dataArray={daysArray} />
                            </View>
                        </TouchableWithoutFeedback>
                        
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

        </View>

        
    )
}

function Selector({ dataArray, isCircular, value, setValue, minWidth, initialIndex = 0 }) {
    
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
        <View style={[{flex: 1}, minWidth && {minWidth: minWidth}]}>
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
        maxWidth: "85%",
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
        paddingHorizontal: 0,
    },
    selectorText: {
        fontSize: theme.fontSizes.title,
        fontWeight: theme.fontWeights.bold
    }
});