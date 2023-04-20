import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import Data from '../../data/Data';

import Subtitle from '../core/Subtitle';
import ReservationList from '../integrated/ReservationList';

export default function DatebookScreen({navigation, route}) {

    const { selectedEquipment } = route && route.params ? route.params : { selectedEquipment: null };

    React.useLayoutEffect(() => { 
        const navigationParent = navigation ? navigation.getParent() : null;
        if (navigationParent) navigationParent.setOptions({headerShown: false})
    }, [])

    // Temporal: solo para mostrar que esta llegando la informacion
    let equipment = selectedEquipment ? Data.getEquipment(selectedEquipment) : Data.getEquipment(1);

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Subtitle>Reservacion del equipo: {equipment.type}, {equipment.name}</Subtitle>
            </View>
            <View style={styles.body}>
                <ReservationList style={{marginHorizontal: "auto"}}/>
            </View>
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
        maxWidth: 650,
        marginHorizontal: "auto",
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    body: {
        flex: 1,
        padding: 25,
        alignItems: "center",
    },
    reservationList: {
        
    },
})