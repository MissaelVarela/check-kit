import { View, Text, StyleSheet } from 'react-native'

import theme from '../../utils/theme';

import Subtitle from '../core/Subtitle';
import ReservationList from '../integrated/ReservationList';

export default function DatebookScreen() {

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Subtitle>Reservacion de</Subtitle>
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