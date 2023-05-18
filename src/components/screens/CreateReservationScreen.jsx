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
import { toShortDateString } from '../../utils/dateFormat';
import Sesion from '../../utils/Sesion';
import Button from '../core/Button';

export default function CreateReservationScreen({navigation, route}) {

    const { equipmentType, equipmentId, selectedDate } = route ? route.params : {};

    const equipmentsTypes = Data.getEquipmentTypes();
    
    const typeOptions = equipmentsTypes.map((element) => { return { value: element.id, label: element.type }});

    const [equipmentOptions, setEquipmentOptions] = React.useState([]);

    const [selectedType, setSelectedType] = React.useState();
    const [selectedEquipment, setSelectedEquipment] = React.useState();

    // Estados de los pickers
    const [ dateVisible, setDateVisible ] = React.useState(false);
    const [ startHourVisible, setStartHourVisible ] = React.useState(false);
    const [ endHourVisible, setEndHourVisible ] = React.useState(false);
    const selectedDateObj = new Date(selectedDate.year, selectedDate.month, selectedDate.day);
    const dateInitialValue = selectedDate ? selectedDateObj : new Date();
    const [ dateValue, setDateValue ] = React.useState(dateInitialValue);
    const star = new Date();
    star.setHours(8,0,0);
    const [ startHourValue, setStartHourValue ] = React.useState(star);
    const end = new Date();
    end.setHours(9,0,0);
    const [ endHourValue, setEndHourValue ] = React.useState(end);

    // Creando los objetos que tendran referencia algunos componentes hijo:
    const [finalizeConfirmDialog] = React.useState({ setVisible: () => {} });
    const [cancelConfirmDialog] = React.useState({ setVisible: () => {} });
    const [successfulMessageDialog] = React.useState({ setVisible: () => {} });
    const [errorMessageDialog] = React.useState({ setVisible: () => {} });
    const [errorMessage, setErrorMessage] = React.useState("");

    function UpdateEquipmentComboBox(value, label){
        const equipments = Data.getEquipmentsByType(value);
        const newEquipmentsOptions = equipments.map((element) => { return { value: element.id, label: element.name }});
        setEquipmentOptions(newEquipmentsOptions);
        setSelectedEquipment({ value: -1, label: "<Todos>" });
    }

    function finalize() {
        try {
            const startDate = new Date(dateValue);
            startDate.setHours(startHourValue.getHours(), startHourValue.getMinutes(), 0);

            const endDate = new Date(dateValue);
            endDate.setHours(endHourValue.getHours(), endHourValue.getMinutes(), 0);
            
            if (!selectedEquipment || selectedEquipment.value === -1) {
                throw new Error("No hay un equipo seleccionado.");
            }
            if (!startDate || !endDate ) {
                throw new Error("La fecha esta mal.");
            }

            if (startDate >= endDate) {
                throw new Error("La fecha de inicio debe ser mayor a la hora de fin.");
            }

            if (startDate < (new Date())) {
                throw new Error("No es posible reservar para una fecha pasada.");
            }

            const result = insertReservation(
                toShortDateString(startDate),
                toShortDateString(endDate),
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
            console.log("trone", error.message);
            setErrorMessage(error.message)
            errorMessageDialog.setVisible(true); 
        } 

        //navigation && navigation.goBack();
    }

    function cancel() {
        navigation && navigation.goBack();
    }

    // Cuando se cargue el componente.
    React.useEffect(() => {

        if (equipmentType && equipmentType !== -1 && typeOptions) {
            const resultType = typeOptions.find((item) => {
                return item.value === equipmentType;
            })
            setSelectedType(resultType);
            //UpdateEquipmentComboBox(resultType);
            
            const equipments = Data.getEquipmentsByType(resultType.value);
            const newEquipmentsOptions = equipments.map((element) => { return { value: element.id, label: element.name }});

            if (equipmentId && equipmentId !== -1 && newEquipmentsOptions) {
                console.log("entre", newEquipmentsOptions);
                const resultEquipment = newEquipmentsOptions.find((item) => {
                    console.log(item);
                    return item.value === equipmentId;
                })

                setSelectedEquipment(resultEquipment);
            }

            setEquipmentOptions(newEquipmentsOptions);
        }

    }, []);

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
                    <Subtitle style={{ paddingTop: 18, marginBottom: 5 }} > Fecha:</Subtitle>
                </View>
                <View>
                    <DatePicker
                        value={dateValue}
                        setValue={setDateValue}
                        visible={dateVisible}
                        setVisible={setDateVisible} />
                </View>
                <View style={styles.comboContainer}>
                    <View style={{ flex: 1, marginRight: 10, paddingTop: 18 }}>
                        <Subtitle style={{ marginBottom: 5, }}> Hora inicio:</Subtitle>
                        <TimePicker
                            value={startHourValue}
                            setValue={setStartHourValue}
                            visible={startHourVisible}
                            setVisible={setStartHourVisible} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10, paddingTop: 18 }}>
                        <Subtitle style={{ marginBottom: 5 }}> Hora final:</Subtitle>
                        <TimePicker
                            value={endHourValue}
                            setValue={setEndHourValue}
                            visible={endHourVisible}
                            setVisible={setEndHourVisible} />
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
                        <Button
                            style={{ marginTop: 15 }}
                            text="Confirmar" 
                            onPress={() => { finalizeConfirmDialog.setVisible(true) }} />
                    </View>
                </View>
                <ConfirmDialog
                    title="Finalizar"
                    text="¿Desea confirmar la reservación?"
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
                    title="No se pudo guardar la reservación"
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
        maxWidth: 700,
    }
});