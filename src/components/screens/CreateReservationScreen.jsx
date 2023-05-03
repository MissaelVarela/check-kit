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

export default function CreateReservationScreen({navigation}) {

    const equipmentsTypes = Data.getEquipmentTypes();

    const typeOptions = equipmentsTypes.map((element) => { return { value: element.id, label: element.type }});

    const [equipmentOptions, setEquipmentOptions] = React.useState([]);

    const [selectedType, setSelectedType] = React.useState();
    const [selectedEquipment, setSelectedEquipment] = React.useState();

    // Creando los objetos que tendran referencia algunos componentes hijo:
    const finalizeConfirmDialog = { setVisible: () => {} };
    const cancelConfirmDialog = { setVisible: () => {} };

    function UpdateEquipmentComboBox(value, label){
        const equipments = Data.getEquipmentsByType(value);
        const newEquipmentsOptions = equipments.map((element) => { return { value: element.id, label: element.name }});
        setEquipmentOptions(newEquipmentsOptions);
        setSelectedEquipment({ value: -1, label: "<Todos>" });
    }

    function finalize() {
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
                    <TextField
                        placeHolder=""
                        shownBorder />
                </View>
                <View style={styles.comboContainer}>
                    <View style={{ flex: 1, marginRight: 10, paddingTop: 18 }}>
                        <Subtitle style={{ marginBottom: 5, }}> Hora inicio:</Subtitle>
                        <TextField
                            placeHolder=""
                            shownBorder />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10, paddingTop: 18 }}>
                        <Subtitle style={{ marginBottom: 5 }}> Hora final:</Subtitle>
                        <TextField
                            placeHolder=""
                            shownBorder />
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
                    text="Su reservación quedará registrada."
                    reference={finalizeConfirmDialog}
                    onConfirm={finalize} />
                <ConfirmDialog
                    title="Cancelar"
                    text="Su reservación se cancelará."
                    reference={cancelConfirmDialog}
                    onConfirm={cancel} />
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
        backgroundColor: theme.colors.darkLight
    },
    body: {
        flex: 1,
        width: "100%",
        padding: 35,
        alignItems: "center",
        justifyContent: "center",
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