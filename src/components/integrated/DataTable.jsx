import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, TouchableHighlight } from 'react-native';
import theme from '../../utils/theme';

export default function DataTable(props){

    const { dataMatrix, dataHeader, columnsWidth, style, onPress, touchable, navigation } = props;

    const dimensions = useWindowDimensions();
    const isShortScreen = dimensions.width <= 600;

    return(
        <View style={[styles.main, style]}>
            {
                dataHeader &&
                <View style={styles.row}>
                    {
                        dataHeader.map((cell, index) =>
                            <View key={index} style={[styles.cell, columnsWidth && columnsWidth[index] ? { width: columnsWidth[index] } : { flex: 1 }]}>
                                <Text 
                                    style={[
                                        styles.headerText, 
                                        isShortScreen ? {fontSize: theme.fontSizes.smallText} : {fontSize: theme.fontSizes.text}
                                    ]}>
                                        {cell ? cell : "-"}
                                </Text>
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
                            <TouchableHighlight 
                                underlayColor={theme.colors.quaternary}
                                key={index} 
                                onPress={onPress ? onPress : () => {navigation.navigate("Log", { logId: row[0] }) }}>
                                <View style={styles.row}>
                                    {
                                        row.map((cell, index) =>
                                            <View key={index} style={[styles.cell, columnsWidth && columnsWidth[index] ? { width: columnsWidth[index] } : { flex: 1 }]}>
                                                <Text 
                                                    style={[
                                                        styles.text, 
                                                        index == 0 ? {textAlign: "left"} : {textAlign: "center"},
                                                        isShortScreen ? {fontSize: theme.fontSizes.smallestText} : {fontSize: theme.fontSizes.text}
                                                    ]}>
                                                        {cell ? cell : "-"}
                                                </Text>
                                            </View>
                                        )
                                    }
                                </View>
                            </TouchableHighlight> 
                    )
                    :
                    (
                            <View key={index}>
                                <View style={styles.row}>
                                    {
                                        row.map((cell, index) =>
                                            <View key={index} style={[styles.cell, columnsWidth && columnsWidth[index] ? { width: columnsWidth[index] } : { flex: 1 }]}>
                                                <Text 
                                                    style={[
                                                        styles.text, 
                                                        index == 0 ? {textAlign: "left"} : {textAlign: "center"},
                                                        isShortScreen ? {fontSize: theme.fontSizes.smallestText} : {fontSize: theme.fontSizes.text}
                                                    ]}>
                                                        {cell ? cell : "-"}
                                                </Text>
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
        fontWeight: theme.fontWeights.bold,
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
    },
    text: {
        flex: 1,
        textAlignVertical: "center",
    }
})