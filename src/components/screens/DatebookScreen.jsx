import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import Data from '../../data/Data';
import sources from '../../utils/sources';

import Subtitle from '../core/Subtitle';
import ReservationList from '../integrated/ReservationList';
import CircularButton from '../core/CircularBurtton';

export default function DatebookScreen({navigation, route}) {

    const { selectedEquipment, selectedType } = route && route.params ? route.params : { selectedEquipment: -1, selectedType: -1 };
    
    const [ dateObj, setObj ] = React.useState(new Date());

    const [ date, setDate ] = React.useState({ 
        year: dateObj.getFullYear(), 
        month: dateObj.getMonth(),
        weekday: dateObj.getDay(),
        date: dateObj.getDate(),
    });
    
    React.useLayoutEffect(() => { 
        const navigationParent = navigation ? navigation.getParent() : null;
        if (navigationParent) navigationParent.setOptions({headerShown: false})
    }, []);

    // Temporal: solo para mostrar que esta llegando la informacion
    let equipment = selectedEquipment && Data.getEquipment(selectedEquipment);

    if (!equipment) equipment = Data.getEquipment(1);

    function UpdateDate(days) {
        dateObj.setDate(dateObj.getDate() + days);
        const newDate = { 
            year: dateObj.getFullYear(), 
            month: dateObj.getMonth(),
            weekday: dateObj.getDay(),
            date: dateObj.getDate(),
        }
        setDate(newDate);
    }

    return (    
        <View style={styles.screen}>
            <View style={styles.header}>
                <Subtitle>Reservacion del equipo: {equipment.type}, {equipment.name}</Subtitle>
            </View>
            <View style={styles.body}>
                <ReservationList 
                    style={{marginHorizontal: "auto"}}
                    date={date}
                    onPressPlusButton={() => navigation && navigation.navigate("CreateReservation")}
                    selectedType={selectedType}
                    selectedEquipment={selectedEquipment} />
                
                <CircularButton 
                    style={styles.rightButton}
                    color="rgba(200, 200, 200, 0.25)"
                    icon={sources.icons.arrow_right} 
                    onPress={() => { UpdateDate(1) }} />
                <CircularButton 
                    style={styles.leftButton}
                    color="rgba(200, 200, 200, 0.25)"
                    icon={sources.icons.arrow_left}
                    onPress={() => { UpdateDate(-1) }} />  
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
        padding: 35,
        alignItems: "center",
        justifyContent: "center",
    },
    reservationList: {
        
    },
    rightButton: {
        position: "absolute",
        right: 10,
    },
    leftButton: {
        position: "absolute",
        left: 10,
    },
})