import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

import HeaderBar from '../integrated/HeaderBar';
import ComboBox from '../core/ComboBox';
import Subtitle from '../core/Subtitle';
import Button from '../core/Button';
import Section from '../integrated/Section';

import Data from '../../data/Data';

import StackContext from '../../context/StackContext';

export default function DatebookSelectionScreen({ navigation }) {

    const { setGoBack } = React.useContext(StackContext);

    const equipmentsTypes = Data.getEquipmentTypes();

    const typeOptions = equipmentsTypes.map((element) => { return { value: element.id, label: element.type }});

    const [equipmentOptions, setEquipmentOptions] = React.useState([]);

    const [selectedType, setSelectedType] = React.useState();
    const [selectedEquipment, setSelectedEquipment] = React.useState();

    function UpdateEquipmentComboBox(value, label){
        const equipments = Data.getEquipmentsByType(value);
        const newEquipmentsOptions = equipments.map((element) => { return { value: element.id, label: element.name }});
        setEquipmentOptions(newEquipmentsOptions);
        setSelectedEquipment({ value: -1, label: "<Todos>" });
    }

    function navigateToDatebook() {
        navigation && navigation.navigate("Datebook", { selectedEquipment: selectedEquipment.value, selectedType: selectedType.value });
    }

    // Cuando DatebookSelectionScreen se cargue por primera vez.
    React.useEffect(() => {
        // Se agrega el metodo goBack para que se pueda utilizar en el contexto del Stack.
        if (navigation && setGoBack) {
            setGoBack({ method: () => navigation.goBack() });
        } 
    }, []);

    return (
        <View style={styles.screen}>
            <HeaderBar buttonType="menu">Agenda</HeaderBar>
            <View style={styles.body}>
                <Section
                    title="Agenda de Equipos"
                    style={styles.sectionContent}>
                    <View>
                        <View style={styles.comboContainer}>
                            <View style={{ flex: 1, marginRight: 10 }}>
                                <Subtitle style={{ marginBottom: 5 }}>Tipo:</Subtitle>
                                <ComboBox
                                    options={typeOptions}
                                    onSelectChange={UpdateEquipmentComboBox}
                                    placeHolder="<Todos>"
                                    selected={selectedType}
                                    setSelected={setSelectedType} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Subtitle style={{ marginBottom: 5 }}>Equipo:</Subtitle>
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