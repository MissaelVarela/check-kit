import React from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'

import theme from '../../utils/theme';

import Data from '../../data/Data';

import Title from '../core/Title';
import Subtitle from '../core/Subtitle';
import TextDefault from '../core/TextDefault';
import Button from '../core/Button';
import ImageViewer from '../integrated/ImageViewer';
import sources from '../../utils/sources';

export default function EquipmentScreen({route, navigation}) {

    const [shownImageViewer, setShownImageViewer] = React.useState(false);

    const { id } = route ? route.params : { id: 1 }
    let equipmentInfo = Data.getEquipment(id);

    if (!equipmentInfo) equipmentInfo = {
        type: "tipo",
        name: "nombre",
        image: "",
    }

    React.useLayoutEffect(() => { 
        const navigationParent = navigation ? navigation.getParent() : null;
        if (navigationParent) navigationParent.setOptions({headerShown: false})
    }, [])

    
    return(
        <View style={styles.screen}>
            <View style={styles.header}>
                <Title>{equipmentInfo.type}</Title>
                <Subtitle>{equipmentInfo.name}</Subtitle>
            </View>
            <View style={styles.space}/>
            <View style={styles.body}>

                <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => setShownImageViewer(true)}>
                    <Image
                        source={equipmentInfo.image}
                        style={styles.image}/>
                </TouchableOpacity>
                
                <ScrollView style={styles.content}>
                    <View style={{marginTop: 60}}>
                        <TextDefault style={{color: theme.colors.darkLight}}>Detalles generales</TextDefault>
                        <TextDefault>Ubicación: {equipmentInfo.location}</TextDefault>
                        <TextDefault>Identificiador: CAM1</TextDefault>
                    </View>
                    <View style={{marginTop: 20}}>
                        <TextDefault style={{color: theme.colors.darkLight}}>Detalles de mantenimiento</TextDefault>
                        <TextDefault>Estado del equipo: {equipmentInfo.maintenance.state ? "Correcto": "Incorrecto"}</TextDefault>
                        <TextDefault>Ultimo mantenimiento: {equipmentInfo.maintenance.lastMaintenace}</TextDefault>
                    </View>
                    <View style={styles.buttonConteiner}>
                        <Button style={{marginTop: 60, width: 240}}>Agendar</Button>
                        <Button style={{marginTop: 20, width: 240}}>Empezar mantenimiento</Button>
                        <Button style={{marginTop: 20, marginBottom: 30, width: 240}}>Ultimo</Button>
                    </View>
                </ScrollView>
            </View> 
            <ImageViewer 
                imageSource={equipmentInfo.image}
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
        backgroundColor: theme.colors.light,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
    },
    content: {
        flex: 1,
        width: "100%",
        paddingVertical: 0,
        paddingLeft: 20,
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
    }
})
