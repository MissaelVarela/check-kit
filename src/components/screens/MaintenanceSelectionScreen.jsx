import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import theme from '../../utils/theme'
import Data from '../../data/Data'

import HeaderBar from '../integrated/HeaderBar';
import ComboBox from '../core/ComboBox'
import Subtitle from '../core/Subtitle'
import Button from '../core/Button'
import Section from '../integrated/Section'

import StackContext from '../../context/StackContext';

export default function MaintenanceSelectionScreen({ navigation, route }) {

    const { setGoBack } = React.useContext(StackContext);

    const equipmentsTypes = Data.getEquipmentTypes();

    const typeOptions = equipmentsTypes.map((element) => { return { value: element.id, label: element.type }});

    const [equipmentOptions, setEquipmentOptions] = React.useState([]);

    const [selectedType, setSelectedType] = React.useState({ value: -1, label: "<Tipo de equipo>" });
    const [selectedEquipment, setSelectedEquipment] = React.useState({ value: -1, label: "<Equipo en especifico>" });
    const [selectedRoutine, setSelectedRoutine] = React.useState();

    function UpdateEquipmentComboBox(value, label){
        const equipments = Data.getEquipmentsByType(value);
        const newEquipmentsOptions = equipments.map((element) => { return { value: element.id, label: element.name }});
        setEquipmentOptions(newEquipmentsOptions);
        setSelectedEquipment({ value: -1, label: "<Equipo en especifico>" });
    }

    // Cuando MaintenanceSelectionScreen se cargue por primera vez.
    React.useEffect(() => {
        // Se agrega el metodo goBack para que se pueda utilizar en el contexto del Stack.
        if (navigation && setGoBack) {
            setGoBack({ method: () => navigation.goBack() });
        } 
    }, []);
    
    return (
        <View style={styles.screen}>
            <HeaderBar buttonType="menu">Mantenimiento</HeaderBar>
            <View style={styles.body}>
                <Section title="Dar Mantenimineto a Equipo" style={styles.sectionContent}>
                    <View style={styles.comboContainer}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <Subtitle style={{ marginBottom: 5 }}>Tipo:</Subtitle>
                            <ComboBox
                                placeHolder="<Tipo de equipo>"
                                options={typeOptions}
                                onSelectChange={UpdateEquipmentComboBox}
                                selected={selectedType}
                                setSelected={setSelectedType} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Subtitle style={{ marginBottom: 5 }}>Equipo:</Subtitle>
                            <ComboBox
                                placeHolder="<Equipo en especifico>"
                                options={equipmentOptions}
                                selected={selectedEquipment}
                                setSelected={setSelectedEquipment} />
                        </View>
                    </View>
                    <Button
                        style={styles.button}
                        noEnable={selectedType.value === -1 || selectedEquipment.value === -1}
                        onPress={() => { navigation && navigation.navigate("MaintenanceConfirm", { selectedEquipment: selectedEquipment.value }) }}>
                        Dar Mantenimiento
                    </Button>
                </Section>

                {/*
                IMPLEMENTAR: Mantenimiento por rutina
                <Section title="Dar Mantenimiento por Rutina" contentStyle={styles.sectionContent}>
                    <Subtitle style={{ marginBottom: 5 }}>Rutina:</Subtitle>
                    <ComboBox
                        placeHolder="<Sin seleccionar>"
                        selected={selectedRoutine}
                        setSelected={setSelectedRoutine} />
                    <Button
                        style={styles.button}
                        noEnable={true} >
                        Dar Mantenimiento
                    </Button>
                </Section>
            */}
            </View>
            
            

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.colors.light
    },
    body: {
        flex: 1,
        padding: 35,
    },
    comboContainer: {
        flexDirection: "row",
    },
    sectionContent: {
        width: "100%",
        maxWidth: 600,
        marginHorizontal: "auto",
    },
    button: {
        maxWidth: 300,
        marginTop: 20,
    }

})