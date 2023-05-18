import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import Data from '../../data/Data';
import sources from '../../utils/sources';
import { getReservations } from '../../data/reservations';
import { destructureDate } from '../../utils/dateFormat';

import Subtitle from '../core/Subtitle';
import ReservationList from '../integrated/ReservationList';
import CircularButton from '../core/CircularBurtton';
import HeaderBar from '../integrated/HeaderBar';
import IconButton from '../core/IconButton';



export default function DatebookScreen({navigation, route}) {

    const { selectedEquipment, needGoBackToOrigin, selectedType } = route && route.params ? route.params : { selectedEquipment: -1, selectedType: -1 };
    
    const [ dateObj ] = React.useState(new Date());

    const [ date, setDate ] = React.useState({ 
        year: dateObj.getFullYear(), 
        month: dateObj.getMonth(),
        weekday: dateObj.getDay(),
        date: dateObj.getDate(),
    });

    // Temporal: solo para mostrar que esta llegando la informacion
    let equipment = selectedEquipment && Data.getEquipment(selectedEquipment);

    if (!equipment) {
        let type = selectedType && Data.getEquipmentType(selectedType);
        
        if (!type) {
            //equipment = Data.getEquipment(1);

            var typeText = "Todos los equipos";
            var nameText = null;
        }
        else {
            var typeText = type.type;
            var nameText = null;
        }
        
    }
    else {
        var typeText = equipment.type;
        var nameText = equipment.name;
    }
        
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

    // Referenciando la ReservationList para acceder al metodo getData.
    const [ reservationList ] = React.useState({ getData: () => {}});

    return (    
        <View style={styles.screen}>
            <HeaderBar buttonType="back" needGoBackToOrigin={needGoBackToOrigin} stackNavigation={navigation}>Agenda</HeaderBar>
            <View style={styles.header}>
                <View>
                    <Subtitle>Reservación de: </Subtitle>
                    <Subtitle style={{fontWeight: theme.fontWeights.semiBold, color: theme.colors.primary}}>{typeText}{ nameText ? ": " + nameText : ""}</Subtitle>
                </View>
                
                <IconButton 
                    icon={sources.icons.refresh}
                    onPress={() => reservationList.getData()} />
            </View>
            <View style={styles.body}>
                <ReservationList 
                    style={{marginHorizontal: "auto"}}
                    date={date}
                    onPressPlusButton={() => navigation && navigation.navigate("CreateReservation", {equipmentId: selectedEquipment, equipmentType: selectedType, selectedDate: destructureDate(dateObj)})}
                    selectedType={selectedType}
                    selectedEquipment={selectedEquipment}
                    
                    reference={reservationList}/>
                
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
        flexDirection: "row",
        justifyContent: "space-between",
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