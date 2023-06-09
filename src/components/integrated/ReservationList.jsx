import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import sources from '../../utils/sources';
import Data from '../../data/Data';
import Sesion from '../../utils/Sesion';

import TextDefault from '../core/TextDefault';
import Title from '../core/Title';
import ReservationElement from './ReservationElement';
import CircularButton from '../core/CircularBurtton';
import Subtitle from '../core/Subtitle';

import { getReservations } from '../../utils/reservations';

//let reservationData;

export default function ReservationList({ date, onPressPlusButton, selectedType, selectedEquipment, reference }) {

    const [ today ] = React.useState(new Date());
    const [ highlight, setHighlight ] = React.useState(false);
    const [ reservations, setReservations ] = React.useState([]);

    const [ reservationData, setReservationData ] = React.useState([]);

    const userType = Sesion.getUserType();

    if (reference) {
        reference.getData = getData;
    }

    React.useEffect(() => {

        updateData();

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

    async function getData() {
        console.log("Consultado en la BD.")
        const result = await getReservations();
        setReservationData(result);
    } 

    function updateData() {
        if (reservationData) {
            const todayReservations = [];
            reservationData.forEach((element) => { 
                const elementDate = new Date(element.start);

                if (elementDate.getFullYear() === date.year) {
                    if (elementDate.getMonth() === date.month) {
                        if (elementDate.getDate() === date.date) {
                            if (filterRersevation(element.equipmentId, selectedType, selectedEquipment)) {
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
                }
            });

            // Ordenando las reservaciones:
            todayReservations.sort((a, b) => {
                if (a.start < b.start) return -1;
                else if (a.start === b.start) return 0;
                else return 1;
            })

            setReservations(todayReservations);
        }
    }

    // La comparación se hace con los datos locales estaticos... cambiar despues
    function filterRersevation(reservationEquipmentId, selectedEquipmentType, selectedEquipmentId) {
        
        if (selectedEquipmentId && selectedEquipmentId !== -1) {
            if (selectedEquipmentId == reservationEquipmentId) return true; 
            else return false;   
        } 
        else if (selectedEquipmentType && selectedEquipmentType !== -1) {
            if (selectedEquipmentType == Data.findEquipmentType(reservationEquipmentId)) return true;
            else return false; 
        }
        else {
            return true;
        }

    }

    // Cuando cargue por primera vez.
    React.useEffect(() => {
        getData();
    }, []);

    // Cuando cambie la data de reservaciones.
    React.useEffect(() => {
        updateData();
    }, [reservationData]);

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
                        <View style={styles.emptyList}>
                            <Text style={styles.emptyListText}>No hay reservaciones para mostrar...</Text>
                            <Image 
                                source={sources.icons.empty}
                                style={{height: 128, width: 128, marginTop: 15}}/>
                        </View>
                        
                    } />
            </View>
            
                
            {
                (userType === 1 || userType === 2) &&
                <CircularButton 
                    style={styles.plusButton}
                    color={theme.colors.primary}
                    icon={sources.icons.add} 
                    onPress={onPressPlusButton} />  
            }
                
            
               
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

    emptyList: {
        height: 250,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyListText: {
        color: theme.colors.dark,
        fontSize: theme.fontSizes.smallText
    }

})