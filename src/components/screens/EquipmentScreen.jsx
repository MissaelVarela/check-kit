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

import { DrawerContext } from '../navigation/MainNavigation';

export default function EquipmentScreen({route, navigation}) {

    const [shownImageViewer, setShownImageViewer] = React.useState(false);
    
    // Cachando el contexto del estado seccion activa del drawer
    const { activeDrawerSection, setActiveDrawerSection } = React.useContext(DrawerContext);

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
            ["Estado del equipo::", equipment.maintenance.descripcionState],
            ["Ultimo Mantenimiento:", equipment.maintenance.lastMaintenace],
            ["Proximo Mantenimiento:", equipment.maintenance.nextMaintenace],
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

    React.useLayoutEffect(() => { 
        const navigationParent = navigation ? navigation.getParent() : null;
        if (navigationParent) navigationParent.setOptions({headerShown: false})
    }, [])

    function navigateToMaintenance() {
        // El primer navigation es del Stack de CatalogNavigation y el segundo es de el Drawer MainNavigation.
        if (navigation) {
            const drawerNavigation = navigation.getParent();
            if (drawerNavigation) {
                setActiveDrawerSection("MaintenanceNavigation");
                drawerNavigation.navigate("MaintenanceNavigation", { maintenanceRequest: true, selectedEquipment: id });
            }
        }
    }

    function navigateToDatebook() {
        // El primer navigation es del Stack de CatalogNavigation y el segundo es de el Drawer MainNavigation.
        if (navigation) {
            const drawerNavigation = navigation.getParent();
            if (drawerNavigation) {
                setActiveDrawerSection("DatebookNavigation");
                drawerNavigation.navigate("DatebookNavigation", { datebookRequest: true, selectedEquipment: id });
            }
        }
    }
    
    return(
        <View style={styles.screen}>
            <ScrollView>
                <View style={styles.header}>
                    <Title>{equipment && equipment.type}</Title>
                    <Subtitle>{equipment && equipment.name}</Subtitle>
                </View>
                <View style={styles.space}/>
                <View style={styles.body}>

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
                            title="Datos del equipo:">
                            <Table
                                dataMatrix={dataEquipment}
                                columnsWidth={[140]} />
                        </Section>
                        <Section
                            title="Datos del mantenimiento:">
                            <Table
                                dataMatrix={dataMaintenance}
                                columnsWidth={[180]} />
                        </Section>
                        <View style={styles.buttonConteiner}>
                            <Button 
                                style={{ marginTop: 60, width: 240 }}
                                onPress={navigateToDatebook}>
                                Agendar
                            </Button>
                            <Button 
                                style={{ marginTop: 20, width: 240 }}
                                onPress={navigateToMaintenance}>
                                Dar Mantenimiento
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
        //marginTop: 35,
        flex: 1,
        backgroundColor: theme.colors.lightDark,
        justifyContent: "space-between"
    },
    header: {
        marginLeft: 25, 
        paddingVertical: 15
    },
    space: {
        width: "100%",
        height: 200,
    },
    body: {
        flex: 1,
        marginHorizontal: 25,
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
        marginBottom: 25,
    }
})
