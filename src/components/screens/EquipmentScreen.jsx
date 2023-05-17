import React from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'

import theme from '../../utils/theme';
import sources from '../../utils/sources';

import Data from '../../data/Data';

import Title from '../core/Title';
import Subtitle from '../core/Subtitle';
import TextDefault from '../core/TextDefault';
import Button from '../core/Button';
import ImageViewer from '../integrated/ImageViewer';
import Section from '../integrated/Section';
import Table from '../integrated/Table';

import DrawerContext from '../../context/DrawerContext'
import HeaderBar from '../integrated/HeaderBar';

export default function EquipmentScreen({route, navigation}) {

    const [shownImageViewer, setShownImageViewer] = React.useState(false);
    
    // Cachando el contexto del estado seccion activa del drawer
    const { setActiveDrawerSection } = React.useContext(DrawerContext);

    const { id } = route ? route.params : { id: 1 };

    let equipment = Data.getEquipment(id);

    if (equipment) {
        var dataEquipment = [
            ["Identificador:", equipment.id],
            ["Categoría:", equipment.category],
            ["Marca:", equipment.brand],
            ["Modelo:", equipment.model],
            ["Serie:", equipment.series],
            ["Ubicación:", equipment.location],
        ];
    
        var dataMaintenance = [
            ["Estado del equipo:", "-"],
            ["Ultimo Mantenimiento:", "-"],
            ["Proximo Mantenimiento:", "-"],
        ];
    }
    else {
        var dataEquipment = [
            ["Tipo:", ""],
            ["Nombre descriptivo:", ""],
            ["Identificador:", ""],
            ["Marca:", ""],
            ["Modelo:", ""],
            ["Serie:", ""],
            ["Ubicación:", ""],
        ];
    
        var dataMaintenance = [
            ["Estado del equipo::", ""],
            ["Ultimo Mantenimiento:", ""],
            ["Proximo Mantenimiento:", ""],
        ];
    }

    function navigateToMaintenance() {
        // Si el DrawerNavigation existe:
        if (navigation && navigation.getParent()) {
            // Actualizamos la seccion del drawer activa.
            setActiveDrawerSection("MaintenanceNavigation");
            // Y navegamos hacia la seccion del drawer con la pantalla target.
            navigation.getParent().navigate("MaintenanceNavigation", { 
                targetScreen: "MaintenanceConfirm", origin: "CatalogNavigation", data: { equipmentId: id } 
            });
        }
    }

    function navigateToDatebook() {
        // Si el DrawerNavigation existe:
        if (navigation && navigation.getParent()) {
            // Actualizamos la seccion del drawer activa.
            setActiveDrawerSection("DatebookNavigation");
            // Y navegamos hacia la seccion del drawer con la pantalla target.
            navigation.getParent().navigate("DatebookNavigation", { 
                targetScreen: "Datebook", origin: "CatalogNavigation", data: { equipmentId: id } 
            });
        }
    }

    function navigateToLogs() {
        // Si el DrawerNavigation existe:
        if (navigation && navigation.getParent()) {
            // Actualizamos la seccion del drawer activa.
            setActiveDrawerSection("LogNavigation");
            // Y navegamos hacia la seccion del drawer con la pantalla target.
            navigation.getParent().navigate("LogNavigation", { 
                targetScreen: "Log", origin: "CatalogNavigation", data: { equipmentId: id } 
            });
        }
    }
    
    return(
        <View style={styles.screen}>
            <HeaderBar buttonType="back">Equipos médicos</HeaderBar>
            <ScrollView style={styles.body} contentContainerStyle={{alignItems: "center"}}>
                <View style={styles.bodyHeader}>
                    <Title>{equipment && equipment.type}</Title>
                    <Subtitle>{equipment && equipment.name}</Subtitle>
                </View>
                <View style={styles.space}/>
                <View style={styles.card}>

                    <TouchableOpacity
                        style={styles.imageContainer}
                        onPress={() => setShownImageViewer(true)}>
                        <Image
                            source={equipment && equipment.image}
                            style={styles.image} />
                    </TouchableOpacity>

                    <View
                        style={[styles.content, {alignItems: "center"}]}>
                        <Section
                            style={{ marginTop: 100 }}
                            title="Datos del equipo:"
                            showLine={false}>
                            <Table
                                dataMatrix={dataEquipment}
                                columnsWidth={[140]} />
                        </Section>

                        {
                            // IMPLEMENTAR Datos del mantenimiento
                            /*
                            <Section
                                title="Datos del mantenimiento:">
                                <Table
                                    dataMatrix={dataMaintenance}
                                    columnsWidth={[180]} />
                            </Section>
                            */
                        }
                        
                        <View style={styles.buttonConteiner}>
                            <Button 
                                style={{ marginTop: 0, width: 240 }}
                                onPress={navigateToDatebook}>
                                Agendar
                            </Button>
                            <Button 
                                style={{ marginTop: 20, width: 240 }}
                                onPress={navigateToMaintenance}>
                                Dar mantenimiento
                            </Button>
                            <Button 
                                style={{ marginTop: 20, width: 240 }}
                                onPress={navigateToLogs}>
                                Registros del equipo
                            </Button>
                        </View>
                    </View>
                </View> 
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
        backgroundColor: theme.colors.lightDark,
        justifyContent: "space-between"
    },
    body: {
        paddingHorizontal: 25,
    },
    bodyHeader: {
        width: "100%",
        marginLeft: 25, 
        paddingVertical: 15
    },
    space: {
        width: "100%",
        height: 200,
    },
    card: {
        flex: 1,
        maxWidth: 600,
        width: "100%",
        backgroundColor: theme.colors.light,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
    },
    content: {
        flex: 1,
        width: "100%",
        paddingVertical: 0,
        paddingHorizontal: 25,
    },
    imageContainer: {
        top: -200,
        width: 244,
        height: 244,
        borderRadius: 122,
        position: "absolute",
        zIndex: 1,
    },
    image: {
        width: 244,
        height: 244,
        borderRadius: 122,
    },
    buttonConteiner: {
        width: "100%",
        alignItems: "center",
        marginBottom: 35,
    }
})
