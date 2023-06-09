import { View, Text, StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export default function CheckListTable(props){

    const { dataMatrix, dataHeader, columnsWidth, style } = props;

    return(
        <View style={[styles.main,style]}>
            {
                dataMatrix && dataMatrix.map((row, index) => 
                    <View style={styles.row} key={index}>
                        {
                            row.map((cell, index) =>
                                <View key={index} style={[styles.cell, columnsWidth && columnsWidth[index] ? {width: columnsWidth[index]} : {flex: 1}]}>
                                    <Text style={styles.text} >{cell ? cell : "-"}</Text>
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
    },
    text: {
        fontSize: theme.fontSizes.smallestText,
    }
})