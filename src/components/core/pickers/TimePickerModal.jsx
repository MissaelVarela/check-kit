import React from 'react';
import { View, TouchableWithoutFeedback, Modal, StyleSheet } from 'react-native';

import theme from '../../../utils/theme';
import { monthToText, hour24ToHour12, hour12ToHour24, padTo2Digits } from '../../../utils/dateFormat';

import Selector from './Selector';
import Title from '../Title';

export default function TimePickerModal({ style, value = new Date(), setValue, visible, setVisible }) {

    // Arreglos
    const yearsArray = [2023, 2024, 2025];
    const monthsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    
    const hoursArray = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const minutesArray = [0, 15, 30, 45];
    const ampmArray = ["am", "pm"];

    // Creando los estados de cada selector. Guardan el Index actual.
    const [ year, setYear ] = React.useState(yearsArray.findIndex((item) => item === value.getFullYear()));
    const [ month, setMonth ] = React.useState(monthsArray.findIndex((item) => item === value.getMonth()));

    const hourDestructured = hour24ToHour12(value.getHours());

    const [ hour, setHour ] = React.useState(hoursArray.findIndex((item) => item === hourDestructured.hourBase12));
    const [ minutes, setMinutes ] = React.useState(minutesArray.findIndex((item) => item === value.getMinutes()));
    const [ ampm, setAmpm ] = React.useState(ampmArray.findIndex((item) => item === hourDestructured.ampm));

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
        console.log(hoursArray[hour], minutesArray[minutes], ampmArray[ampm])
        if (hour === -1) { var invalidHour = true; setHour(0) };
        if (minutes === -1) { var invalidHour = true; setMinutes(0) };
        if (ampm === -1) { var invalidHour = true; setAmpm(0) };
        
        if (!invalidHour) {
            const newHour = hour12ToHour24(hoursArray[hour], ampmArray[ampm]);
            const newMinutes = minutesArray[minutes];
            value.setHours(newHour, newMinutes, 0);
            // Forzando a actulizar el estado:
            setValue(new Date(value));
        }
            
    }, [hour, minutes, ampm]);

    

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
                                dataArray={hoursArray}
                                isCircular
                                current={hour}
                                setCurrent={setHour} />

                            <View style={{justifyContent: "center"}}>
                                <Title style={{textAlignVertical: "center", marginBottom: 5}}>:</Title>
                            </View>

                            <Selector
                                dataArray={minutesArray}
                                isCircular
                                toText={padTo2Digits}
                                current={minutes}
                                setCurrent={setMinutes} />
                            
                            <Selector
                                dataArray={ampmArray}
                                current={ampm}
                                setCurrent={setAmpm} />

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