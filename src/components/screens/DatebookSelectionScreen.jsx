import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../utils/theme';
import ComboBox from '../core/ComboBox';
import Subtitle from '../core/Subtitle';
import Button from '../core/Button';
import Section from '../integrated/Section';

import Data from '../../data/Data';

export default function DatebookSelectionScreen({ navigation }) {

    // 
    const equipmentsTypes = Data.getEquipmentTypes();

    const typeOptions = equipmentsTypes.map((element) => { return { value: element.id, label: element.type }});

    const [equipmentOptions, setEquipmentOptions] = React.useState([]);

    const [selectedType, setSelectedType] = React.useState();
    const [selectedEquipment, setSelectedEquipment] = React.useState();

    function UpdateEquipmentComboBox(value, label){
        const equipments = Data.getEquipmentsByType(value);
        const newEquipmentsOptions = equipments.map((element) => { return { value: element.id, label: element.brand + " (" + element.name + ")" }});
        setEquipmentOptions(newEquipmentsOptions);
        setSelectedEquipment({ value: -1, label: "<Todos>" });
    }

    function navigateToDatebook() {

        navigation && navigation.navigate("Datebook", { selectedEquipment: selectedEquipment.value });
    }

    React.useEffect(() => {
        const navigationParent = navigation ? navigation.getParent() : null
        if (navigationParent) {
            navigation.addListener('focus', () => { navigationParent.setOptions({headerShown: true}) })
        }
    }, [navigation]);

    return (
        <View style={styles.screen}>
            
            <Section
                title="Agenda de Equipos"
                style={styles.sectionContent}>
                <View>
                    <View style={styles.comboContainer}>
                        <View style={{flex: 1, marginRight: 10}}>
                            <Subtitle style={{marginBottom: 5}}>Tipo:</Subtitle>
                            <ComboBox 
                                options={typeOptions}
                                onSelectChange={UpdateEquipmentComboBox}
                                placeHolder="<Todos>"
                                selected={selectedType}
                                setSelected={setSelectedType} />
                        </View>
                        <View style={{flex: 1, marginLeft: 10}}>
                            <Subtitle style={{marginBottom: 5}}>Equipo:</Subtitle>
                            <ComboBox 
                                options={equipmentOptions}
                                placeHolder="<Todos>"
                                selected={selectedEquipment}
                                setSelected={setSelectedEquipment} />
                        </View>
                    </View>
                    <Button 
                        style={styles.button}
                        onPress={navigateToDatebook}>
                        Ir
                    </Button>
                </View>
            </Section>
            
            <Section 
                title="Agenda de Áreas"
                style={styles.sectionContent}>
                    <Button 
                        style={styles.button}
                        onPress={() => navigation && navigation.navigate("Datebook")}>
                        Ir
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