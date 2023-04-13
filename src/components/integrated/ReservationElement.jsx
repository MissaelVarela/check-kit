import { View, Text, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import TextDefault from '../core/TextDefault';

export default function ReservationElement( props ) {

    const { style, text } = props;

    const startHour = "10:00 AM";
    const endHour = "11:00 AM";
    const equipmentType = "Monitor S.V.";
    const equipmentName = "Azul";
    const responsibleName = "Por Nicole Cruz";

    return(
        <View style={[styles.main, style]}>
            <View style={styles.textContainer}>
                <TextDefault style={styles.startHourText}>{startHour}</TextDefault>
                <TextDefault style={styles.endHourText}>a {endHour}</TextDefault>
            </View>
            <View style={[styles.textContainer, {alignItems: "flex-end"}]}>
                <TextDefault><TextDefault style={styles.equipmentTypeText}>{equipmentType}</TextDefault> {equipmentName}</TextDefault> 
                <TextDefault style={styles.responsibleNameText}>{responsibleName}</TextDefault>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 80,
        borderRadius: 10,
        paddingHorizontal: 15,
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