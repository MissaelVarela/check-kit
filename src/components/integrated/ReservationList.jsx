import { View, FlatList, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import sources from '../../utils/sources';

import TextDefault from '../core/TextDefault';
import Title from '../core/Title';
import ReservationElement from './ReservationElement';
import CircularButton from '../core/CircularBurtton';


export default function ReservationList() {

    const data = [{id: 1}, {id: 2},{id: 3}, {id: 4},{id: 5}, {id: 6},{id: 7}, {id: 8}]

    const year = "2023";
    const mount = "MAR";
    const dayNumber = "3";
    const dayText = "Jueves";

    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={styles.headerElement}>
                    <TextDefault>{year}</TextDefault>
                    <Title>{mount}</Title>
                </View>
                <View style={[styles.headerElement, {alignItems: "flex-end"}]}>
                    <Title style={{fontSize: 32}}>{dayNumber}</Title>
                    <TextDefault>{dayText}</TextDefault>
                </View>
            </View>
            <View style={styles.body}>
                <FlatList
                    style={styles.list}
                    data={data}
                    showsVerticalScrollIndicator
                    ListFooterComponent={ () => <View style={{height: 50}}/> }
                    renderItem={
                        ({ item }) =>
                            <ReservationElement
                                style={{marginBottom: 20}} />
                    } />
            </View>
            <CircularButton 
                        style={styles.button}
                        icon={sources.icons.add} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        maxWidth: 650,
        borderRadius: 40,
        backgroundColor: theme.colors.lightDark,
    },
    header: {
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 40,
    },
    headerElement: {
        
    },
    body: {
        flex: 1,
        paddingHorizontal: 15,
        alignItems: "center",
    },
    list: {
        flex: 1,
        width: "100%",
        maxWidth: 500,
        paddingTop: 15,
        paddingHorizontal: 10,
    },
    button: {
        position: "absolute",
        right: 20,
        bottom: 20,
    },

})