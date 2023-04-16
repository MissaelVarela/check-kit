import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import theme from '../../utils/theme'
import Data from '../../data/Data'

import ComboBox from '../core/ComboBox'
import Subtitle from '../core/Subtitle'
import Button from '../core/Button'
import Section from '../integrated/Section'

export default function MaintenanceSelectionScreen({ navigation }) {

    const equipmentsTypes = Data.getEquipmentTypes();

    const typeOptions = equipmentsTypes.map((element) => { return { value: element.id, label: element.type }});

    const [equipmentOptions, setEquipmentOptions] = React.useState([]);

    const [selectedType, setSelectedType] = React.useState();
    const [selectedEquipment, setSelectedEquipment] = React.useState();
    const [selectedRoutine, setSelectedRoutine] = React.useState();

    function UpdateEquipmentComboBox(value, label){
        const equipments = Data.getEquipmentsByType(value);
        const newEquipmentsOptions = equipments.map((element) => { return { value: element.id, label: element.name }});
        setEquipmentOptions(newEquipmentsOptions);
        setSelectedEquipment({ value: -1, label: "<Equipo en especifico>" });
    }

    React.useEffect(() => {
        const navigationParent = navigation ? navigation.getParent() : null
        if (navigationParent) {
            navigation.addListener('focus', () => { navigationParent.setOptions({headerShown: true}) })
        }
    }, [navigation]);
    
    return (
        <View style={styles.screen}>
            <Section title="Dar Mantenimineto a Equipo" contentStyle={styles.sectionContent}>
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
                            setSelected={setSelectedEquipment}/>
                    </View>
                </View>
                <Button 
                    style={styles.button}
                    onPress={() => {
                        if (selectedEquipment.value != -1)
                            navigation.navigate("MaintenanceConfirm", { selectedType: selectedType, selectedEquipment: selectedEquipment });
                    }}>
                    Dar Mantenimiento
                </Button>
            </Section>
            
            <Section title="Dar Mantenimiento por Rutina" contentStyle={styles.sectionContent}> 
                <Subtitle style={{marginBottom: 5}}>Rutina:</Subtitle>
                <ComboBox 
                    placeHolder="<Todos>" 
                    selected={selectedRoutine}
                    setSelected={setSelectedRoutine} />
                <Button style={styles.button}>
                    Dar Mantenimiento
                </Button>
            </Section>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 35,
        alignItems: "center",
        backgroundColor: theme.colors.light
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