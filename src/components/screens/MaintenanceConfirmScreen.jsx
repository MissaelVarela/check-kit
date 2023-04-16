import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import theme from '../../utils/theme';
import Data from '../../data/Data';
import Section from '../integrated/Section';
import Table from '../integrated/Table';
import Button from '../core/Button';
import ImageViewer from '../integrated/ImageViewer';

export default function MaintenanceConfirmScreen({ route, navigation }){

    const { selectedType, selectedEquipment } = route.params;

    const [shownImageViewer, setShownImageViewer] = React.useState(false);

    let equipment;
    if (selectedEquipment) {
        equipment = Data.getEquipment(selectedEquipment.value);
    }

    if (equipment) {
        var dataEquipment = [
            ["Tipo:", equipment.type],
            ["Nombre descriptivo:", equipment.name],
            ["Identificador:", equipment.id],
            ["Marca:", equipment.brand],
            ["Modelo:", equipment.model],
            ["Serie:", equipment.series],
            ["Ubicación:", equipment.location],
        ];
    
        var dataReponsable = [
            ["Nombre:", "Nicole Balvaneda Cruz Aguirre"],
            ["Tipo de usuario:","Alumno"],
            ["Autorizado por:", "David Garcia Torres"],
        ];
    }
    else {
        var dataEquipment = [
            ["Tipo:", "Monitor SV"],
            ["Nombre descriptivo:","Azul"],
            ["Identificador:", "MSV-1"],
            ["Marca:","Philips"],
            ["Modelo:", "XXXXX"],
            ["Serie:","11111"],
            ["Ubicación:", "Laboratorio Medico"],
        ];
    
        var dataReponsable = [
            ["Nombre:", "Nicole Balvaneda Cruz Aguirre"],
            ["Tipo de usuario:","Alumno"],
            ["Autorizado por:", "David Garcia Torres"],
        ];
    }

    React.useLayoutEffect(() => { 
        const navigationParent = navigation ? navigation.getParent() : null;
        if (navigationParent) navigationParent.setOptions({headerShown: false})
    }, [])

    return(
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => setShownImageViewer(true)}>
                    <Image
                        source={equipment.image}
                        style={styles.image} />
                </TouchableOpacity>
                
            </View>
            <ScrollView style={styles.body} contentContainerStyle={{alignItems: "center"}}>
                <Section
                    title="Datos del Equipo"
                    style={styles.sectionContent}>
                        <Table 
                            dataMatrix={dataEquipment}
                            columnsWidth={[ 160 ]} />
                </Section>
                <Section
                    title="Datos del Responsable"
                    style={styles.sectionContent}>
                        <Table 
                            dataMatrix={dataReponsable}
                            columnsWidth={[ 160 ]}/>
                </Section>
                <Button 
                    onPress={() => navigation.navigate("CheckList")}
                    style={{maxWidth: 300, marginHorizontal: "auto"}}
                    >Empezar Mantenimiento
                </Button>
            </ScrollView>
            <ImageViewer
                imageSource={equipment && equipment.image}
                shown={shownImageViewer} 
                setShown={setShownImageViewer} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.colors.light,
    },
    header: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 140,
        height: 140,
        borderRadius: 100,
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 100,
    },
    body: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 25,
    },
    sectionContent: {
        width: "100%",
        maxWidth: 600,
    },
})