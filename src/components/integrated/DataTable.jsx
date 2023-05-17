import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableHighlight } from 'react-native';
import theme from '../../utils/theme';
import { isReactComponent } from '../../utils/componentTypeof';
import sources from '../../utils/sources';

export default function DataTable(props){

    const { dataMatrix, dataHeader, columnsWidth, style, onPress, touchable } = props;

    const dimensions = useWindowDimensions();
    const isShortScreen = dimensions.width <= 600;

    function getCellContent(cell) {

        try {
            //En el caso de que la celda se texto plano, numero o undefined.
            if (typeof cell === "string" || typeof cell === "number" || !cell) {
                return (
                    <Text
                        style={[
                            styles.text,
                            isShortScreen ? { fontSize: theme.fontSizes.smallestText } : { fontSize: theme.fontSizes.text }
                        ]}>
                        {cell ? cell : "-"}
                    </Text>
                )
            } 

            //En el caso de que la celda se objeto con el formato Titulo Texto.
            else if (cell.title || cell.text) {
                return(
                    <View>
                        <Text
                            numberOfLines={2}
                            style={[
                                styles.title,
                                isShortScreen ? { fontSize: theme.fontSizes.smallestText } : { fontSize: theme.fontSizes.text }
                            ]}>
                            {cell.title ? cell.title : "-"}
                        </Text>
                        <Text
                            numberOfLines={2}
                            style={[
                                styles.text,
                                isShortScreen ? { fontSize: theme.fontSizes.smallestText } : { fontSize: theme.fontSizes.text }
                            ]}>
                            {cell.text ? cell.text : "-"}
                        </Text>
                    </View> 
                )
                        
            }

            //En el caso de que la celda se objeto con el formato Answer.
            else if (cell.answer) {
                return(
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <View
                            style={styles.anwerStyle}>
                            <Text
                                numberOfLines={2}
                                style={[
                                    styles.title,
                                    isShortScreen ? { fontSize: theme.fontSizes.smallestText } : { fontSize: theme.fontSizes.text }
                                ]}>
                                {cell.answer ? cell.answer : "-"}
                            </Text>
                        </View>
                    </View>
                     
                )
                        
            }

            //Caso default. Sin formato
            else {
                return (
                    <Text
                        style={[
                            styles.text,
                            isShortScreen ? { fontSize: theme.fontSizes.smallestText } : { fontSize: theme.fontSizes.text }
                        ]}>
                        s/f
                    </Text>
                )   
            }

        }
        catch (e) {
            return (<Text>Error</Text>)
        }
    }

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
                dataMatrix && dataMatrix.length > 0
                ? // Componente mostrado si existen datos:
                dataMatrix.map((row, index) =>  
                    touchable 
                    ?
                    (
                            <TouchableHighlight 
                                underlayColor={theme.colors.quaternary}
                                key={index} 
                                onPress={ () => onPress && onPress(index)}>
                                <View style={[styles.row, index === dataMatrix.length - 1 && {borderBottomWidth: 0}]}>
                                    {
                                        row.map((cell, index) =>
                                            <View key={index} style={[styles.cell, columnsWidth && columnsWidth[index] ? { width: columnsWidth[index] } : { flex: 1 }]}>
                                                {
                                                    getCellContent(cell)       
                                                }
                                            </View>
                                        )
                                    }
                                </View>
                            </TouchableHighlight> 
                    )
                    :
                    (
                            <View key={index}>
                                <View style={[styles.row, index === dataMatrix.length - 1 && {borderBottomWidth: 0}]}>
                                    {
                                        row.map((cell, index) =>
                                            <View key={index} style={[styles.cell, columnsWidth && columnsWidth[index] ? { width: columnsWidth[index] } : { flex: 1 }]}>
                                                {
                                                    getCellContent(cell)       
                                                }
                                            </View>
                                        )
                                    }
                                </View>
                            </View>
                    )                  
                )

                : // Componente mostrado si no existen datos:
                <View style={styles.emptyList}>
                    <Text style={styles.emptyListText}>No se encontraron datos para mostrar...</Text>
                    <Image
                        source={sources.icons.empty}
                        style={{height: 128, width: 128, marginTop: 15}}/>
                </View>
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: theme.colors.lightDark,
        borderRadius: 15,
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.darkLight,
    },
    cell: {
        paddingHorizontal: 5,
        paddingVertical: 15,
        justifyContent: "center",
    },
    headerText: {
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.dark,
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
    },
    title: {
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.dark,
        textAlign: "center",
        textAlignVertical: "center",
    },
    text: {
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
    },
    anwerStyle: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: theme.colors.darkLight,
        backgroundColor: theme.colors.light,
    },
    emptyList: {
        height: 250,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyListText: {
        color: theme.colors.dark,
        fontSize: theme.fontSizes.smallText
    }
})