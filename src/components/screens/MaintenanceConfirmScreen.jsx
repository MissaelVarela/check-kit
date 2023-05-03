import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import theme from '../../utils/theme';
import Data from '../../data/Data';
import Sesion from '../../utils/Sesion';

import Section from '../integrated/Section';
import Table from '../integrated/Table';
import Button from '../core/Button';
import ImageViewer from '../integrated/ImageViewer';
import HeaderBar from '../integrated/HeaderBar';

export default function MaintenanceConfirmScreen({ route, navigation }){

    const { selectedEquipment, needGoBackToOrigin } = route && route.params ? route.params : { selectedEquipment: null };

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

        switch(Sesion.getUserType()) {
            case 1: var tipo = "Administrador"; break;
            case 2: var tipo = "Maestro"; break;
            case 3: var tipo = "Alumno"; break;
            default: var tipo = "Usuario"; break;
        }
    
        var dataReponsable = [
            ["Nombre:", Sesion.getName()],
            ["Tipo de usuario:", tipo],
            ["Autorizado por:", Sesion.getName()],
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

    function navigateToCheckList() {
        if (navigation) {
            const selectedEquipment = { equipmentId: equipment.id, checkListId: equipment.checkListsId[0] };
            navigation.navigate("CheckList", selectedEquipment);
        }
    }

    return(
        <View style={styles.screen}>
            <HeaderBar buttonType="back" needGoBackToOrigin={needGoBackToOrigin} stackNavigation={navigation}>Mantenimiento</HeaderBar>
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
                    onPress={navigateToCheckList}
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