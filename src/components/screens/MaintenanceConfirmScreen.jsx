import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import theme from '../../utils/theme';
import Data from '../../data/Data';
import Section from '../integrated/Section';
import Table from '../integrated/Table';
import Button from '../core/Button';
import ImageViewer from '../integrated/ImageViewer';

export default function MaintenanceConfirmScreen({ route, navigation }){

    const { selectedEquipment } = route && route.params ? route.params : { selectedEquipment: null };

    const [shownImageViewer, setShownImageViewer] = React.useState(false);

    let equipment = selectedEquipment ? Data.getEquipment(selectedEquipment) : Data.getEquipment(1);

    if (equipment) {
        var dataEquipment = [
            ["Categoría:", equipment.category],
            ["Tipo:", equipment.type],
            ["Nombre:", equipment.name],
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
            ["Categoría:", ""],
            ["Tipo:", ""],
            ["Nombre descriptivo:",""],
            ["Identificador:", ""],
            ["Marca:",""],
            ["Modelo:", ""],
            ["Serie:",""],
            ["Ubicación:", ""],
        ];
    
        var dataReponsable = [
            ["Nombre:", ""],
            ["Tipo de usuario:",""],
            ["Autorizado por:", ""],
        ];
    }

    React.useLayoutEffect(() => { 
        const navigationParent = navigation ? navigation.getParent() : null;
        if (navigationParent) navigationParent.setOptions({headerShown: false})
    }, [])

    return(
        <View style={styles.screen}>
            <ScrollView style={styles.body} contentContainerStyle={{alignItems: "center"}}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.imageContainer}
                        onPress={() => setShownImageViewer(true)}>
                        <Image
                            source={equipment.image}
                            style={styles.image} />
                    </TouchableOpacity>

                </View>
                <Section
                    title="Datos del Equipo"
                    style={styles.sectionContent}>
                        <Table 
                            dataMatrix={dataEquipment}
                            columnsWidth={[ 140 ]} />
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
                    style={{maxWidth: 300, marginBottom: 25, marginHorizontal: "auto"}}>
                    Empezar Mantenimiento
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