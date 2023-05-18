import React from 'react';
import { View, TouchableWithoutFeedback, Modal, StyleSheet } from 'react-native';

import theme from '../../../utils/theme';
import { monthToText } from '../../../utils/dateFormat';

import Selector from './Selector';

export default function DatePickerModal({ style, value = new Date(), setValue, visible, setVisible }) {

    const yearRange = (2023, 2025);

    // Arreglos
    const yearsArray = [2023, 2024, 2025];
    const monthsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    // Creando los estados de cada selector. Guardan el Index actual.
    const [ year, setYear ] = React.useState(yearsArray.findIndex((item) => item === value.getFullYear()));
    const [ month, setMonth ] = React.useState(monthsArray.findIndex((item) => item === value.getMonth()));
    // Antes de crear el estado del day se genera el daysArray.
    const [ daysArray, setDaysArray ] = React.useState(getDaysArray(yearsArray[year], monthsArray[month]));
    const [ day, setDay ] = React.useState(daysArray.findIndex((item) => item === value.getDate()));

    // Cuando el mes o año cambie 
    React.useEffect(() => {
        const newDaysArray = getDaysArray(yearsArray[year], monthsArray[month]);
        setDaysArray(newDaysArray);
        
        // Se verifica si el dia seleccionado es valido para el mes
        if (day >= newDaysArray.length) {
            setDay(newDaysArray.length - 1);
        }
    }, [year, month]);

    // Cuando cambien un valor en los selectors o el daysArray
    React.useEffect(() => {
        if (year === -1) { var invalidDate = true; setYear(0) };
        if (month === -1) { var invalidDate = true; setMonth(0) };
        if (day === -1) { var invalidDate = true; setDay(0) };
        
        if (!invalidDate)
            setValue(new Date(yearsArray[year], monthsArray[month], daysArray[day]));
    }, [year, month, day, daysArray]);

    

    // Funciones
    function getDaysArray(year, month) {
        const days = new Date(year, month + 1, 0).getDate();

        const array = new Array();
        for (let i = 1; i <= days; i++) {
            array.push(i);
        }

        return array;
    }

    return (
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
                                dataArray={daysArray}
                                isCircular
                                current={day}
                                setCurrent={setDay} />

                            <Selector
                                dataArray={monthsArray}
                                isCircular
                                minWidth={120}
                                toText={monthToText}
                                current={month}
                                setCurrent={setMonth} />
                            
                            <Selector
                                dataArray={yearsArray}
                                current={year}
                                setCurrent={setYear} />

                        </View>
                    </TouchableWithoutFeedback>

                </View>
            </TouchableWithoutFeedback>
        </Modal>
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
});