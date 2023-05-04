import { View, StyleSheet } from 'react-native'

import theme from '../../utils/theme';
import React from 'react';
import Title from '../core/Title';
import Subtitle from '../core/Subtitle';
import ComboBox from '../core/ComboBox';
import Data from '../../data/Data';
import TextField from '../core/TextField';
import SecundaryButton from '../core/SecundaryButton';
import HeaderBar from '../integrated/HeaderBar';
import ConfirmDialog from '../integrated/ConfirmDialog';
import TimePicker from '../core/pickers/TimePicker';
import DatePicker from '../core/pickers/DatePicker';
import MessageDialog from '../integrated/MessageDialog';

import { insertReservation } from '../../utils/reservations';
import { formatDate } from '../../utils/formatDate';
import Sesion from '../../utils/Sesion';

export default function CreateReservationScreen({navigation}) {

    const equipmentsTypes = Data.getEquipmentTypes();

    const typeOptions = equipmentsTypes.map((element) => { return { value: element.id, label: element.type }});

    const [equipmentOptions, setEquipmentOptions] = React.useState([]);

    const [selectedType, setSelectedType] = React.useState();
    const [selectedEquipment, setSelectedEquipment] = React.useState();

    // Creando los objetos que tendran referencia algunos componentes hijo:
    const finalizeConfirmDialog = { setVisible: () => {} };
    const cancelConfirmDialog = { setVisible: () => {} };
    const successfulMessageDialog = { setVisible: () => {} };
    const errorMessageDialog = { setVisible: () => {} };

    const [errorMessage, setErrorMessage] = React.useState("");

    const startTimePicker = { value: "sin referenciar" };
    const endTimePicker = { value: "sin referenciar" };
    const datePicker = { value: "sin referenciar" };

    function UpdateEquipmentComboBox(value, label){
        const equipments = Data.getEquipmentsByType(value);
        const newEquipmentsOptions = equipments.map((element) => { return { value: element.id, label: element.name }});
        setEquipmentOptions(newEquipmentsOptions);
        setSelectedEquipment({ value: -1, label: "<Todos>" });
    }

    function finalize() {
        console.log("Valor guardado:", startTimePicker.value);
        console.log("Valor guardado:", endTimePicker.value);
        console.log("Valor guardado:", datePicker.value);

        const startH = (startTimePicker.value.amPm.text === "am" ? startTimePicker.value.hours.text : (startTimePicker.value.hours.number + 13)) + ":" + startTimePicker.value.minutes.text;
        const endH = (endTimePicker.value.amPm.text === "am" ? endTimePicker.value.hours.text : (endTimePicker.value.hours.number + 13)) + ":" + endTimePicker.value.minutes.text;
        console.log(datePicker.value.representationShort + " " + startH)
        console.log(datePicker.value.representationShort + " " + endH)
        const startDate = new Date(datePicker.value.representationShort + " " + startH);//
        const endDate = new Date(datePicker.value.representationShort + " " + endH);
        console.log(startDate, endDate)
        try {

            if (!selectedEquipment || selectedEquipment.value === -1) {
                throw new Error("No hay un equipo seleccionado.");
            }
            if (!startDate || !endDate ) {
                throw new Error("La fecha esta mal.");
            }

            const result = insertReservation(
                formatDate(startDate),
                formatDate(endDate),
                selectedEquipment.value,
                Sesion.getUserId() ? Sesion.getUserId() : 1,
            );
            
            if (result) {
                successfulMessageDialog.setVisible(true);
            }else {
                errorMessageDialog.setVisible(true);
            }
            
        }
        catch (error) {
            setErrorMessage("No se pudo guardar la Reservación. " + error.message)
            errorMessageDialog.setVisible(true); 
        } 

        navigation && navigation.goBack();
    }

    function cancel() {
        navigation && navigation.goBack();
    }

    return (
     <View style={styles.screen}>
        <HeaderBar buttonType="back">Agenda</HeaderBar>
        <View style={styles.body}>
            <View style={styles.screenBorder}>
                <Title style={{ paddingBottom: 18 }} > Crear reservación
                </Title>
                <View style={styles.comboContainer}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Subtitle style={{ marginBottom: 5 }}> Equipo:</Subtitle>
                        <ComboBox
                            options={typeOptions}
                            onSelectChange={UpdateEquipmentComboBox}
                            placeHolder="<Equipo seleccionado>"
                            selected={selectedType}
                            setSelected={setSelectedType} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Subtitle style={{ marginBottom: 5 }}> Modelo:</Subtitle>
                        <ComboBox
                            options={equipmentOptions}
                            placeHolder="<Todos>"
                            selected={selectedEquipment}
                            setSelected={setSelectedEquipment} />
                    </View>
                </View>
                {
                    /*
<View>
                    <Subtitle style={{ paddingTop: 18, marginBottom: 5 }}  > Reservar para alguien más</Subtitle>
                </View>
                <View>
                    <ComboBox
                        options={equipmentOptions}
                        placeHolder="<Todos>"
                        selected={selectedEquipment}
                        setSelected={setSelectedEquipment} />
                </View>
                    */
                }
                
                <View>
                    <Subtitle style={{ paddingTop: 18, marginBottom: 5 }} > Fecha</Subtitle>
                </View>
                <View>
                    <DatePicker
                        reference={datePicker}
                        visible={false}/>
                </View>
                <View style={styles.comboContainer}>
                    <View style={{ flex: 1, marginRight: 10, paddingTop: 18 }}>
                        <Subtitle style={{ marginBottom: 5, }}> Hora inicio:</Subtitle>
                        <TimePicker
                            reference={startTimePicker}
                            visible={false}
                            initialHour={8} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10, paddingTop: 18 }}>
                        <Subtitle style={{ marginBottom: 5 }}> Hora final:</Subtitle>
                        <TimePicker
                            reference={endTimePicker}
                            visible={false}
                            initialHour={9} />
                    </View>
                </View>
                <View style={styles.comboContainer}>
                    <View style={{ flex: 1, marginRight: 10, paddingTop: 50 }}>
                        <SecundaryButton
                            style={{ marginTop: 15 }}
                            text="Cancelar"
                            onPress={() => { cancelConfirmDialog.setVisible(true) }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10, paddingTop: 50 }}>
                        <SecundaryButton
                            style={{ marginTop: 15, }}
                            text="Confirmar" 
                            onPress={() => { finalizeConfirmDialog.setVisible(true) }} />
                    </View>
                </View>
                <ConfirmDialog
                    title="Finalizar"
                    text="¿Desea confirmar la reservación?."
                    reference={finalizeConfirmDialog}
                    onConfirm={finalize} />
                <ConfirmDialog
                    title="Cancelar"
                    text="Su reservación se cancelará."
                    reference={cancelConfirmDialog}
                    onConfirm={cancel} />
                <MessageDialog
                    title="Información"
                    text="Se guardó correctamente la Reservación."
                    reference={successfulMessageDialog}
                    onConfirm={() => navigation && navigation.goBack() } />
                <MessageDialog
                    title="Información"
                    text={errorMessage}
                    reference={errorMessageDialog} />
            </View>
        </View>
    </View>
        
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.light
    },
    body: {
        flex: 1,
        width: "100%",
        padding: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.darkLight
    },
    comboContainer: {
        flexDirection: "row",
    },
    screenBorder: {
        padding:35,
        borderRadius:10,
        backgroundColor: theme.colors.light,
        width: "100%",
        maxWidth: 1000,
    }
});