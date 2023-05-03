import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../utils/theme';

export default function DataTable(props){

    const { dataMatrix, dataHeader, columnsWidth, style, onPress, touchable, navigation } = props;

    return(
        <View style={[styles.main, style]}>
            {
                dataHeader &&
                <View style={styles.row}>
                    {
                        dataHeader.map((cell, index) =>
                            <View key={index} style={[styles.cell, columnsWidth && columnsWidth[index] ? { width: columnsWidth[index] } : { flex: 1 }]}>
                                <Text style={styles.headerText}>{cell ? cell : "-"}</Text>
                            </View>
                        )
                    }
                </View>
            }
            {
                dataMatrix && dataMatrix.map((row, index) =>  
                    touchable 
                    ?
                    (
                            <TouchableOpacity key={index} onPress={onPress ? onPress : () => {navigation.navigate("Log", { logId: row[0] }) }}>
                                <View style={styles.row}>
                                    {
                                        row.map((cell, index) =>
                                            <View key={index} style={[styles.cell, columnsWidth && columnsWidth[index] ? { width: columnsWidth[index] } : { flex: 1 }]}>
                                                <Text style={styles.text} >{cell ? cell : "-"}</Text>
                                            </View>
                                        )
                                    }
                                </View>
                            </TouchableOpacity> 
                    )
                    :
                    (
                            <View key={index}>
                                <View style={styles.row}>
                                    {
                                        row.map((cell, index) =>
                                            <View key={index} style={[styles.cell, columnsWidth && columnsWidth[index] ? { width: columnsWidth[index] } : { flex: 1 }]}>
                                                <Text style={styles.text} >{cell ? cell : "-"}</Text>
                                            </View>
                                        )
                                    }
                                </View>
                            </View>
                    )                  
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
        paddingVertical: 10,
    },
    headerText: {
        fontSize: theme.fontSizes.smallText,
        fontWeight: theme.fontWeights.bold,
        textAlign: "center",
    },
    text: {
        flex: 1,
        fontSize: theme.fontSizes.smallestText,
        textAlign: "center",
        textAlignVertical: "center",
    }
})