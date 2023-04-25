import { View, StyleSheet } from 'react-native'

import theme from '../../utils/theme';

import Title from '../core/Title';

export default function CreateReservationScreen() {

    return (
        <View style={styles.screen}>
            <Title>Crear reservación</Title>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 35,
        alignItems: "center",
        backgroundColor: theme.colors.light
    }
});