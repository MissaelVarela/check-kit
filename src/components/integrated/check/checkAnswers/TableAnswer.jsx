import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

import theme from '../../../../utils/theme';
import RadioButton from '../../../core/RadioButton';

import LogContext from '../../../../context/LogContext';

export default function TableAnswer({ answers, elements, elementsHeader, columnsWidth, stlye, tableAnswer, Index, sectionIndex, checkIndex }){

    const { log } = React.useContext(LogContext); 

    // Creando el Group en el log.
    if (log && log.sections) {
        console.log("Volviendo a cargar")
        log.sections[sectionIndex].checks[checkIndex].groups = [];
    }

    const dimensions = useWindowDimensions();
    const isShortScreen = dimensions.width <= 400;

    return (
        <View style={[styles.main, stlye]}>
            {
                // Creando la row como header de la tabla
                (elementsHeader || answers) &&
                    <HeaderRow
                        columnsWidth={columnsWidth}
                        elementsHeader={elementsHeader}
                        columns={answers}
                        isShortScreen={isShortScreen} />
            }
            {
                // Creando el resto de rows
                elements && elements.map((row, index) =>
                    <Row
                        key={index}
                        columnsWidth={columnsWidth}
                        element={row}
                        columns={answers} 
                        isLastRow={index === elements.length - 1}
                        isShortScreen={isShortScreen} 
                        rowIndex={index} />
                )
            }
        </View>
    )

    function HeaderRow({ columnsWidth, columns, elementsHeader, isLastRow, isShortScreen }) {

        return (
            <View style={[styles.row, isLastRow && { borderBottomWidth: 0 }]}>
                {
                    // Creando la celda de la primer columna
                    <Cell columnWidth={(columnsWidth && columnsWidth[0]) && columnsWidth[0]}>
                        <Text
                            style={[styles.text, isShortScreen ? styles.shortScreen : styles.normalScreen]}
                            numberOfLines={3}>
                            {typeof elementsHeader === "string" && elementsHeader}
                        </Text>
                    </Cell>
                }
                {
                    // Creando el resto celdas en las diferentes columnas
                    columns.map((answer, index) =>
                        <Cell
                            key={index + 1}
                            columnWidth={columnsWidth && columnsWidth[index + 1] && columnsWidth[index + 1]}>
                            <Text
                                style={[styles.text, isShortScreen ? styles.shortScreen : styles.normalScreen]}
                                numberOfLines={1}>
                                {answer ? answer : "-"}
                            </Text>
                        </Cell>
                    )
                }
            </View>
        )
    }

    function Row({ columnsWidth, columns, element, isLastRow, isShortScreen, tableAnswerIndex, rowIndex }) {

        // Por cada row se podra seleccionar un solo radiobutton. 
        // En el estado selected se guardara que radiobutton esta seleccionado en la row.
        const [selected, setSelected] = React.useState(null);

        // Creando la sub-pregunta en el log.
        if (log && log.sections) {
            if (!log.sections[sectionIndex].checks[checkIndex].groups[rowIndex]) {
                log.sections[sectionIndex].checks[checkIndex].groups[rowIndex] = {
                    number: rowIndex + 1,
                    subQuestion: element,
                    // Aqui iria la creacion del arreglo anwers...
                };
            }
            
        }

        return (
            <View style={[styles.row, isLastRow && { borderBottomWidth: 0 }]}>
                {
                    // Creando la celda de la primer columna
                    <Cell columnWidth={columnsWidth && columnsWidth[0] && columnsWidth[0]}>
                        <Text
                            style={[styles.text, isShortScreen ? styles.shortScreen : styles.normalScreen]}
                            numberOfLines={3}>
                            {typeof element === "string" && element}
                        </Text>
                    </Cell>
                }

                {
                    // Creando el resto celdas en las diferentes columnas
                    columns.map((answer, index) =>
                        <Cell
                            key={index + 1}
                            columnWidth={columnsWidth && columnsWidth[index + 1] && columnsWidth[index + 1]}>
                            <RadioButton
                                myIndex={index + 1}
                                selected={selected}
                                onChecked={() => { 
                                    setSelected(index + 1);
                                    if (log && log.sections) {
                                        log.sections[sectionIndex].checks[checkIndex].groups[rowIndex].answers = answer;
                                    }
                                }}
                                onUnchecked={() => {
                                    setSelected(null);
                                    if (log && log.sections) {
                                        log.sections[sectionIndex].checks[checkIndex].groups[rowIndex].answers = undefined;
                                    }
                                }} />
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
                {children}
            </View>
        )
    }


    
}

function HeaderRow({ columnsWidth, columns, elementsHeader, isLastRow, isShortScreen }) {

    return (
        <View style={[styles.row, isLastRow && {borderBottomWidth: 0}]}>
            {
                // Creando la celda de la primer columna
                <Cell columnWidth={(columnsWidth && columnsWidth[0]) && columnsWidth[0]}>
                    <Text 
                        style={[styles.text, isShortScreen ? styles.shortScreen : styles.normalScreen]}
                        numberOfLines={3}>
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
                            style={[styles.text, isShortScreen ? styles.shortScreen : styles.normalScreen]}
                            numberOfLines={1}>
                            {answer ? answer : "-"}
                        </Text>
                    </Cell>
                )
            }
        </View>
    )
}

function Row({ columnsWidth, columns, element, isLastRow, isShortScreen, checkListLog, tableAnswerIndex, rowIndex }) {

    // Por cada row se podra seleccionar un solo radiobutton. 
    // En el estado selected se guardara que radiobutton esta seleccionado en la row.
    const [ selected, setSelected ] = React.useState(null);

    // Guardando la sub-pregunta
    if (checkListLog) {
        if (!checkListLog.sections[0].checkList[tableAnswerIndex].answers) {
            checkListLog.sections[0].checkList[tableAnswerIndex].answers = [];
        }

        if (!checkListLog.sections[0].checkList[tableAnswerIndex].answers[rowIndex]) {
            checkListLog.sections[0].checkList[tableAnswerIndex].answers[rowIndex] = {};
        }

        checkListLog.sections[0].checkList[tableAnswerIndex].answers[rowIndex].question = element;    
    }
    

    return (
        <View style={[styles.row, isLastRow && {borderBottomWidth: 0}]}>
            {
                // Creando la celda de la primer columna
                <Cell columnWidth={columnsWidth && columnsWidth[0] && columnsWidth[0]}>
                    <Text 
                        style={[styles.text, isShortScreen ? styles.shortScreen : styles.normalScreen]}
                        numberOfLines={3}>
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
                            onChecked={() => {
                                setSelected(index + 1);
                                if (checkListLog) {
                                    checkListLog.sections[0].checkList[tableAnswerIndex].answers[rowIndex].answer = answer;    
                                }
                            }}
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
        textAlign: "center",
    },
    shortScreen: {
        fontSize: theme.fontSizes.smallestText,
    },
    normalScreen: {
        fontSize: theme.fontSizes.text,
    }
})