import { View, Text, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import TextDefault from '../core/TextDefault';

export default function ReservationElement( props ) {

    const { startHour, endHour, equipmentType, equipmentName, responsibleName, style } = props;

    //const startHour = "10:00 AM";
    //const endHour = "11:00 AM";
    //const equipmentType = "Monitor S.V.";
    //const equipmentName = "Azul";
    //const responsibleName = "Por Nicole Cruz";

    return(
        <View style={[styles.main, style]}>
            <View style={styles.textContainer}>
                <TextDefault style={styles.startHourText}>{startHour ? startHour : "-"}</TextDefault>
                <TextDefault style={styles.endHourText}>a {endHour ? endHour : "-"}</TextDefault>
            </View>
            <View style={[styles.textContainer, {alignItems: "flex-end"}]}>
                <TextDefault>
                    <TextDefault style={styles.equipmentTypeText}>{equipmentType ? equipmentType : "-"}</TextDefault>
                     {equipmentName ? equipmentName : "Sin nombre"}
                </TextDefault> 
                <TextDefault style={styles.responsibleNameText}>{responsibleName ? responsibleName : "-"}</TextDefault>
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