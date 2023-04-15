import { View, Text, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default function Table(props){

    const { dataMatrix, dataHeader, columnsWidth } = props;

    return(
        <View style={styles.main}>
            {
                dataMatrix && dataMatrix.map((row) => 
                    <View style={styles.row}>
                        {
                            row.map((cell, index) =>
                                <View style={[styles.cell, columnsWidth && columnsWidth[index] ? {width: columnsWidth[index]} : {flex: 1}]}>
                                    <Text style={[index > 0 ? {fontWeight: theme.fontWeights.bold} : null]}>{cell}</Text>
                                </View>
                            )
                        }
                    </View>
                )
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    main: {
        
        backgroundColor: theme.colors.lightDark,
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.darkLight,
    },
    cell: {
        paddingHorizontal: 5,
        paddingVertical: 5,
    }
})