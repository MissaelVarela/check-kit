import { View, FlatList, Image, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import sources from '../../utils/sources';
import Data from '../../data/Data';

import TextDefault from '../core/TextDefault';
import Title from '../core/Title';
import ReservationElement from './ReservationElement';
import CircularButton from '../core/CircularBurtton';
import Subtitle from '../core/Subtitle';
import React from 'react';
import { getReservations } from '../../utils/reservations';

let reservationData;

export default function ReservationList({ date, onPressPlusButton, selectedType, selectedEquipment }) {

    const [ today ] = React.useState(new Date());
    const [ highlight, setHighlight ] = React.useState(false);
    const [ reservations, setReservations ] = React.useState([]);

    React.useEffect(() => {
        //const reservationsResult = Data.getReservations(selectedType, selectedEquipment, date.year, date.month, date.date);
        //setReservations(reservationsResult);

        getData();

        if (date.date === today.getDate() 
        && date.month === today.getMonth() 
        && date.year === today.getFullYear()) 
            setHighlight(true);
        else 
            setHighlight(false);
    }, [date]);

    const myYear = date.year ? date.year : "-";
    const myMonth = date.month ? getTextMonth(date.month) : "-";
    const myNumberDate = date.date ? date.date : "-";
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


    // Obtener los datos del servidor:
    const [ data, setData ] = React.useState([]);

    async function getData() {
        reservationData = await getReservations();
        if (reservationData) {
            const todayReservations = [];
            reservationData.forEach((element) => { 
                
                const elementDate = new Date(element.start);

                if (elementDate.getFullYear() === date.year) {
                    if (elementDate.getMonth() === date.month) {
                        if (elementDate.getDate() === date.date) {
                            console.log("entre")
                            const reservation = {
                                start: elementDate,
                                end: new Date(element.end),
                                equipmentType: element.equipmentType,
                                equipmentName: element.equipmentName,
                                user: element.userName + " " + element.userLastName,
                            };

                            todayReservations.push(reservation);
                        }
                    }
                }
            });

            setReservations(todayReservations);
        }
    } 

    React.useEffect(() => {
        // Obteniendo la información
        getData();
    }, []);

    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={styles.headerElement}>
                    <TextDefault>{myYear}</TextDefault>
                    <Title>{myMonth}</Title>
                </View>
                <View style={[styles.headerElement, {alignItems: "flex-end"}]}>
                    <Title style={[{fontSize: 32}, highlight && {color: theme.colors.primary} ]}>{myNumberDate}</Title>
                    <TextDefault>{myTextDay}</TextDefault>
                </View>
            </View>
            <View style={styles.body}>
                     {
                        // Corregir la forma de actualizar las reservaciones por fecha
                    }
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.list} 
                    data={reservations}
                    ListFooterComponent={ () => <View style={{height: 50}}/> }
                    renderItem={
                        ({ item }) => {

                            // Implementar una forma mas organizada para darle el formato al texto:
                            /*
                            if (item.startHour) {
                                const minutes = item.startHour.minute < 10 ? "0" + item.startHour.minute : item.startHour.minute;
                                if (item.startHour.hour > 12) {
                                    var startHour = (item.startHour.hour - 12) + ":" + minutes + " PM";
                                } else if (item.startHour.hour === 12) {
                                    var startHour = item.startHour.hour + ":" + minutes + " PM";
                                } else {
                                    var startHour = item.startHour.hour + ":" + minutes + " AM";
                                }
                            }
                            
                            if (item.endHour) {
                                const minutes = item.startHour.minute < 10 ? "0" + item.startHour.minute : item.startHour.minute;
                                if (item.endHour.hour > 12) {
                                    var endHour = (item.endHour.hour - 12) + ":" + minutes + " PM";
                                } else if (item.endHour.hour === 12) {
                                    var endHour = item.endHour.hour + ":" + minutes + " PM";
                                } else {
                                    var endHour = item.endHour.hour + ":" + minutes + " AM";
                                }
                            }*/
                            if (item.start) {
                                const hour = item.start.getHours();
                                const min = item.start.getMinutes();
                                const minutes = min < 10 ? "0" + min : min;
                                if (hour > 12) {
                                    var startHour = (hour - 12) + ":" + minutes + " PM";
                                } else if (hour === 12) {
                                    var startHour = hour + ":" + minutes + " PM";
                                } else {
                                    var startHour = hour + ":" + minutes + " AM";
                                }
                            };

                            if (item.end) {
                                const hour = item.end.getHours();
                                const min = item.end.getMinutes();
                                const minutes = min < 10 ? "0" + min : min;
                                if (hour > 12) {
                                    var endHour = (hour - 12) + ":" + minutes + " PM";
                                } else if (hour === 12) {
                                    var endHour = hour + ":" + minutes + " PM";
                                } else {
                                    var endHour = hour + ":" + minutes + " AM";
                                }
                            }

                            return (
                                <ReservationElement
                                    style={{marginBottom: 20}}
                                    startHour={startHour}
                                    endHour={endHour}
                                    equipmentType={item.equipmentType}
                                    equipmentName={item.equipmentName}
                                    responsibleName={item.user} />
                            )

                        }
                            
                    } 
                    ListEmptyComponent={() => 
                        <View style={{flex: 1}}>
                            <Subtitle>No hay reservaciones para mostrar...</Subtitle>
                            <View style={{flex: 1, paddingVertical: 100}}>
                                <Image 
                                    source={sources.icons.empty}
                                    style={{height: 256, width: 256, alignSelf: "center"}}/>
                            </View>
                        </View>
                        
                    } />
            </View>
            
                
                
                <CircularButton 
                    style={styles.plusButton}
                    color={theme.colors.primary}
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
        //maxWidth: 500,
        paddingTop: 15,
        paddingHorizontal: 10,
    },
    plusButton: {
        position: "absolute",
        right: 15,
        bottom: 15,
    },

})