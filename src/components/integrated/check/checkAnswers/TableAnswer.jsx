import { View, Text, StyleSheet } from 'react-native';

import theme from '../../../../utils/theme';
import RadioButton from '../../../core/RadioButton';

export default function TableAnswer({ answers, elements, elementsHeader, columnsWidth }){
    console.log("Ando aqui")
    return (
        <View style={[{flexDirection: "row", flexWrap: "wrap"}]}>
            <View style={styles.main}>
                {
                    (elementsHeader || answers) && 
                    <View style={styles.row}>
                        <View style={[styles.cell, columnsWidth && columnsWidth[0] ? { width: columnsWidth[0] } : { flex: 1 }]}>
                            <Text style={{ fontWeight: theme.fontWeights.bold }}>{elementsHeader}</Text>
                        </View>
                        {
                            answers.map((answer, index) =>
                                <View key={index+1} style={[styles.cell, columnsWidth && columnsWidth[index+1] ? {width: columnsWidth[index+1]} : {flex: 1}]}>
                                    <Text style={{ fontWeight: theme.fontWeights.bold }}>{answer ? answer : "-"}</Text>
                                </View>
                            )
                        }
                    </View>
                }
                {
                    elements && elements.map((row, index) => 
                        <View style={styles.row} key={index}>
                            <View style={[styles.cell, columnsWidth && columnsWidth[0] ? { width: columnsWidth[0] } : { flex: 1 }]}>
                                <Text style={{ fontWeight: theme.fontWeights.bold }}>{row}</Text>
                            </View>
                            {
                                answers.map((answer, index) =>
                                    <View key={index+1} style={[styles.cell, columnsWidth && columnsWidth[index+1] ? {width: columnsWidth[index+1]} : {flex: 1}]}>
                                        <RadioButton/>
                                    </View>
                                )
                            }
                        </View>
                    ) 
                }
            </View>
        </View>
    )
}

/*

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

*/

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: theme.colors.light,
        // arreglar
        marginBottom: 15,
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.darkLight,
    },
    cell: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
    }
})