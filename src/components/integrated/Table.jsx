import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../../utils/theme';
import sources from '../../utils/sources';

export default function Table(props){

    const { dataMatrix, dataHeader, columnsWidth, style } = props;

    return(
        <View style={[styles.main, style]}>
            {
                dataMatrix && dataMatrix.length > 0

                ? // Componente mostrado si existen datos:
                dataMatrix.map((row, index) => 
                    <View style={[styles.row, index === dataMatrix.length - 1 && {borderBottomWidth: 0}]} key={index}>
                        {
                            row.map((cell, index) =>
                                <View key={index} style={[styles.cell, columnsWidth && columnsWidth[index] ? {width: columnsWidth[index]} : {flex: 1}]}>
                                    <Text style={[index > 0 ? {fontWeight: theme.fontWeights.bold} : null]}>{cell ? cell : "-"}</Text>
                                </View>
                            )
                        }
                    </View>
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
        //borderWidth: 2,
        //borderColor: theme.colors.darkLight
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.darkLight,
    },
    cell: {
        paddingHorizontal: 15,
        paddingVertical: 10,
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