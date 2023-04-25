import { View, FlatList, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import sources from '../../utils/sources';
import Data from '../../data/Data';

import TextDefault from '../core/TextDefault';
import Title from '../core/Title';
import ReservationElement from './ReservationElement';
import CircularButton from '../core/CircularBurtton';
import Subtitle from '../core/Subtitle';
import React from 'react';

export default function ReservationList({ date, onPressPlusButton, selectedType, selectedEquipment }) {

    //const data = [{id: 1}, {id: 2},{id: 3}, {id: 4},{id: 5}, {id: 6},{id: 7}, {id: 8}]

    const reservationsResult = Data.getReservations(selectedType, selectedEquipment, date.year, date.month, date.day);
    const [ reservations, setReservations ] = React.useState(reservationsResult);

    const data = null;

    const myYear = date.year ? date.year : "-";
    const myMonth = date.month ? getTextMonth(date.month) : "-";
    const myNumberDay = date.day ? date.day : "-";
    const myTextDay = date.weekday !== false ? getTextDay(date.weekday) : "-";

    function getTextDay (numberDay) {
        switch(numberDay) {
            case 0: return "Domingo";
            case 1: return "Lunes";
            case 2: return "Martes";
            case 3: return "Miercoles";
            case 4: return "Jueves";
            case 5: return "Viernes";
            case 6: return "Sábado";
            
            default: return "-";
        }
    }

    function getTextMonth (numberDay) {
        switch(numberDay) {
            case 0: return "ENE";
            case 1: return "FEB";
            case 2: return "MAR";
            case 3: return "ABR";
            case 4: return "MAY";
            case 5: return "JUN";
            case 6: return "JUL";
            case 7: return "AGO";
            case 8: return "SEP";
            case 9: return "OCT";
            case 10: return "NOV";
            case 11: return "DIC";
            default: return "-";
        }
    }

    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={styles.headerElement}>
                    <TextDefault>{myYear}</TextDefault>
                    <Title>{myMonth}</Title>
                </View>
                <View style={[styles.headerElement, {alignItems: "flex-end"}]}>
                    <Title style={{fontSize: 32}}>{myNumberDay}</Title>
                    <TextDefault>{myTextDay}</TextDefault>
                </View>
            </View>
            <View style={styles.body}>
                     {
                        // Corregir la forma de actualizar las reservaciones por fecha
                    }
                <FlatList
                    style={styles.list} 
                    data={[]}
                    ListFooterComponent={ () => <View style={{height: 50}}/> }
                    renderItem={
                        ({ item }) => {

                            if (item.startHour.hour > 12) {
                                var startHour = (item.startHour.hour - 12) + ":" +item.startHour.minute + " PM";
                            } else if (item.startHour.hour === 12) {
                                var startHour = item.startHour.hour + ":" +item.startHour.minute + " PM";
                            } else {
                                var startHour = item.startHour.hour + ":" +item.startHour.minute + " AM";
                            }

                            if (item.endHour.hour > 12) {
                                var endHour = (item.endHour.hour - 12) + ":" +item.endHour.minute + " PM";
                            } else if (item.endHour.hour === 12) {
                                var endHour = item.endHour.hour + ":" +item.endHour.minute + " PM";
                            } else {
                                var endHour = item.endHour.hour + ":" +item.endHour.minute + " AM";
                            }

                            return (
                                <ReservationElement
                                    style={{marginBottom: 20}}
                                    startHour={startHour}
                                    endHour={endHour}
                                    equipmentType={item.equipment.type}
                                    equipmentName={item.equipment.name}
                                    responsibleName={item.responsible} />
                            )

                        }
                            
                    } 
                    ListEmptyComponent={() => 
                        <View style={{flex: 1}}>
                            <Subtitle>No hay reservaciones para mostrar...</Subtitle>
                        </View>
                        
                    } />
            </View>
            <CircularButton 
                    style={styles.plusButton}
                    color={"rgba(0, 102, 255, 0.5)"}
                    icon={sources.icons.add} 
                    onPress={onPressPlusButton} />     
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        maxWidth: 650,
        borderRadius: 40,
        backgroundColor: theme.colors.lightDark,
    },
    header: {
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 40,
    },
    headerElement: {
        
    },
    body: {
        flex: 1,
        paddingHorizontal: 15,
        alignItems: "center",
    },
    list: {
        flex: 1,
        width: "100%",
        maxWidth: 500,
        paddingTop: 15,
        paddingHorizontal: 15,
    },
    plusButton: {
        position: "absolute",
        right: 15,
        bottom: 15,
    },

})