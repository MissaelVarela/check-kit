import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../utils/theme';
import ComboBox from '../core/ComboBox';
import Subtitle from '../core/Subtitle';
import Button from '../core/Button';
import Section from '../integrated/Section';

export default function DatebookSelectionScreen({ navigation }) {

    const [selectedType, setSelectedType] = React.useState();
    const [selectedEquipment, setSelectedEquipment] = React.useState();

    React.useEffect(() => {
        const navigationParent = navigation ? navigation.getParent() : null
        if (navigationParent) {
            navigation.addListener('focus', () => { navigationParent.setOptions({headerShown: true}) })
        }
    }, [navigation]);

    return (
        <View style={styles.screen}>
            
            <Section
                title="Agenda de Equipos">
                <View>
                    <View style={styles.comboContainer}>
                        <View style={{flex: 1, marginRight: 10}}>
                            <Subtitle style={{marginBottom: 5}}>Tipo:</Subtitle>
                            <ComboBox 
                                placeHolder="<Todos>"
                                selected={selectedType}
                                setSelected={setSelectedType} />
                        </View>
                        <View style={{flex: 1, marginLeft: 10}}>
                            <Subtitle style={{marginBottom: 5}}>Equipo:</Subtitle>
                            <ComboBox 
                                placeHolder="<Todos>"
                                selected={selectedEquipment}
                                setSelected={setSelectedEquipment} />
                        </View>
                    </View>
                    <Button onPress={() => navigation && navigation.navigate("Datebook")}>Ir</Button>
                </View>
            </Section>
            
            <Section 
                title="Agenda de Áreas">
                    <Button onPress={() => navigation && navigation.navigate("Datebook")}>Ir</Button>
            </Section>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 35,
        backgroundColor: theme.colors.light
    },
    linea: {
        marginTop: 10,
        marginBottom: 20,
        width: "100%", 
        height: 2, 
        backgroundColor: theme.colors.lightDark
    },
    comboContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },

})