import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../../../../utils/theme';
import RadioButton from '../../../core/RadioButton';

export default function TableAnswer({ answers, elements, elementsHeader, columnsWidth, stlye }){
    
    return (
        <View style={[styles.main, stlye]}>
            {
                // Creando la row como header de la tabla
                (elementsHeader || answers) &&
                    <HeaderRow
                        columnsWidth={columnsWidth}
                        elementsHeader={elementsHeader}
                        columns={answers} />
            }
            {
                // Creando el resto de rows
                elements && elements.map((row, index) =>
                    <Row
                        key={index}
                        columnsWidth={columnsWidth}
                        element={row}
                        columns={answers} 
                        isLastRow={index === elements.length - 1}/>
                )
            }
        </View>
    )
}

function HeaderRow({ columnsWidth, columns, elementsHeader, isLastRow }) {

    return (
        <View style={[styles.row, isLastRow && {borderBottomWidth: 0}]}>
            {
                // Creando la celda de la primer columna
                <Cell columnWidth={(columnsWidth && columnsWidth[0]) && columnsWidth[0]}>
                    <Text 
                        style={styles.text}
                        numberOfLines={1}>
                        {typeof elementsHeader === "string" && elementsHeader}
                    </Text>
                </Cell>
            }
            {
                // Creando el resto celdas en las diferentes columnas
                columns.map((answer, index) =>
                    <Cell
                        key={index + 1}
                        columnWidth={columnsWidth && columnsWidth[index + 1] && columnsWidth[index + 1] }>
                        <Text 
                            style={styles.text}
                            numberOfLines={1}>
                            {answer ? answer : "-"}
                        </Text>
                    </Cell>
                )
            }
        </View>
    )
}

function Row({ columnsWidth, columns, element, isLastRow }) {

    // Por cada row se podra seleccionar un solo radiobutton. 
    // En el estado selected se guardara que radiobutton esta seleccionado en la row.
    const [ selected, setSelected ] = React.useState(null);

    return (
        <View style={[styles.row, isLastRow && {borderBottomWidth: 0}]}>
            {
                // Creando la celda de la primer columna
                <Cell columnWidth={columnsWidth && columnsWidth[0] && columnsWidth[0]}>
                    <Text 
                        style={styles.text}
                        numberOfLines={1}>
                        {typeof element === "string" && element}
                    </Text>
                </Cell> 
            }

            {
                // Creando el resto celdas en las diferentes columnas
                columns.map((answer, index) =>
                    <Cell
                        key={index + 1}
                        columnWidth={columnsWidth && columnsWidth[index + 1] && columnsWidth[index + 1] }>
                        <RadioButton
                            myIndex={index + 1}
                            selected={selected}
                            onChecked={() => setSelected(index + 1)}
                            onUnchecked={() => setSelected(null)} />
                    </Cell>
                )
            }
        </View>
    )
}

function Cell({ columnWidth, children }) {
    
    return (
        <View 
            style={[styles.cell, columnWidth ? { width: columnWidth } : { flex: 1 }]}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: theme.colors.light,
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.darkLight,
    },
    cell: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.dark,
    }
})