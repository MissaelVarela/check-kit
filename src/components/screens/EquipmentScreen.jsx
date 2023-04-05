import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native'

import theme from '../../utils/theme';
import equipments from '../../data/equipments';

import Title from '../core/Title';
import Subtitle from '../core/Subtitle';
import TextDefault from '../core/TextDefault';
import Button from '../core/Button';

export default function EquipmentScreen({route, navigation}) {

    const { id } = route ? route.params : { id: "MSV-1" }
    let equipmentInfo = equipments.find((item) => item.identificador === id)

    if (!equipmentInfo) equipmentInfo = {
        tipo: "tipo",
        nombre: "nombre",
        imagen: "",
    }

    React.useLayoutEffect(() => { 
        const navigationParent = navigation ? navigation.getParent() : null;
        if (navigationParent) navigationParent.setOptions({headerShown: false})
    }, [])

    
    return(
        <View style={styles.screen}>
            <View style={styles.header}>
                <Title>{equipmentInfo.tipo}</Title>
                <Subtitle>{equipmentInfo.nombre}</Subtitle>
            </View>
            <View style={styles.space}/>
            <View style={styles.body}>
                <Image
                    source={equipmentInfo.imagen}
                    style={styles.image}/>
                <ScrollView style={styles.content}>
                    <View style={{marginTop: 60}}>
                        <TextDefault style={{color: theme.colors.darkLight}}>Detalles generales</TextDefault>
                        <TextDefault>Área: Laboratorio medico</TextDefault>
                        <TextDefault>Identificiador: CAM1</TextDefault>
                    </View>
                    <View style={{marginTop: 20}}>
                        <TextDefault style={{color: theme.colors.darkLight}}>Detalles de mantenimiento</TextDefault>
                        <TextDefault>Estado del equipo: Correcto</TextDefault>
                        <TextDefault>Ultimo mantenimiento: 24/02/2023</TextDefault>
                    </View>
                    <View style={styles.buttonConteiner}>
                        <Button style={{marginTop: 60, width: 240}}>Agendar</Button>
                        <Button style={{marginTop: 20, width: 240}}>Empezar mantenimiento</Button>
                        <Button style={{marginTop: 20, marginBottom: 30, width: 240}}>Ultimo</Button>
                    </View>
                </ScrollView>
            </View> 
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
    image: {
        top: -200,
        width: 244,
        height: 244,
        borderRadius: 122,
        position: "absolute",
        zIndex: 1,
    },
    buttonConteiner: {
        width: "100%",
        alignItems: "center",
    }
})
