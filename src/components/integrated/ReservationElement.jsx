import { View, Text, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import TextDefault from '../core/TextDefault';

export default function ReservationElement( props ) {

    const { startHour, endHour, equipmentType, equipmentName, responsibleName, style } = props;

    return(
        <View style={[styles.main, style]}>
            <View>
                <TextDefault style={styles.startHourText}>{startHour ? startHour : "sin hora"}</TextDefault>
                <TextDefault style={styles.endHourText}>a {endHour ? endHour : "sin hora"}</TextDefault>
            </View>
            <View style={[styles.textContainer, {alignItems: "flex-end"}]}>
                <TextDefault numberOfLines={1} style={styles.equipmentTypeText}>{equipmentType ? equipmentType : "sin tipo"}</TextDefault>
                <TextDefault numberOfLines={1}>{equipmentName ? equipmentName : "sin nombre"}</TextDefault> 
                <TextDefault numberOfLines={1} style={styles.responsibleNameText}>{responsibleName ? "por " + responsibleName : "sin responsable"}</TextDefault>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 80,
        borderRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.colors.light,
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
    },
    text: {
        flex: 1 
    },
    startHourText: {
        fontWeight: theme.fontWeights.bold,
    },
    endHourText: {
        fontSize: theme.fontSizes.smallText,
    },
    equipmentTypeText: {
        fontWeight: theme.fontWeights.bold,
    },
    equipmentNameText: {
    },
    responsibleNameText: {
        color: theme.colors.darkLight,
        fontSize: theme.fontSizes.smallText,
    },
})