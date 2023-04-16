import { View, Text, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

export default function Table(props){

    const { dataMatrix, dataHeader, columnsWidth } = props;

    return(
        <View style={styles.main}>
            {
                dataMatrix && dataMatrix.map((row, index) => 
                    <View style={styles.row} key={index}>
                        {
                            row.map((cell, index) =>
                                <View key={index} style={[styles.cell, columnsWidth && columnsWidth[index] ? {width: columnsWidth[index]} : {flex: 1}]}>
                                    <Text style={[index > 0 ? {fontWeight: theme.fontWeights.bold} : null]}>{cell ? cell : "-"}</Text>
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
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})