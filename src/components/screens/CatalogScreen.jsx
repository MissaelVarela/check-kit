import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import IconButton from '../core/IconButton.jsx';
import Subtitle from '../core/Subtitle.jsx';
import EquipmentCard from '../integrated/EquipmentCard.jsx';

import theme from '../../utils/theme.js';
import sources from '../../utils/sources.js';
//import equipments from '../../data/equipments.js';

import Data from '../../data/Data.js';

let equipments;

export default function CatalogScreen({navigation}) {
  
    if (!equipments) equipments = Data.getEquipments();

    React.useEffect(() => {
        const navigationParent = navigation ? navigation.getParent() : null
        if (navigationParent) {
            navigation.addListener('focus', () => { navigationParent.setOptions({headerShown: true}) })
        }
    }, [navigation]);

    const [numColumns, setNumColumns] = React.useState(1);

    function calculateNumColums(width) {
        const columnResult = Math.trunc(width / 200);

        if (columnResult != numColumns) {
            if (columnResult >= 1) 
                setNumColumns(columnResult);
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Subtitle>Lista de Equipos Medicos</Subtitle>
                <IconButton icon={sources.icons.catalogue} small />
            </View>
            <FlatList 
                onLayout={(event) => {
                    const { width } = event.nativeEvent.layout;
                    calculateNumColums(width);
                }}
                key={numColumns}
                style={styles.list}
                data={equipments}
                numColumns={numColumns}
                columnWrapperStyle={numColumns === 1 ? null : {justifyContent: "center"}}
                keyExtractor={item => item.id}
                ListHeaderComponent={<></>}
                renderItem={
                    ({ item }) =>
                        <EquipmentCard
                            style={[{marginHorizontal: 25}, numColumns === 1 ? {marginHorizontal: "auto"} : null]}
                            id={item.id}
                            image={item.image}
                            type={item.type}
                            name={item.name}
                            navigation={navigation} />
                }
                ListFooterComponent={<></>}
                showsVerticalScrollIndicator={false} 
                ListEmptyComponent={<Text>No hay elementos para mostrar...</Text>}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.colors.light,
        alignItems: "center",
    },    
    header: {
        width: "100%",
        maxWidth: 1000,
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    list: {
        width: "100%",
        maxWidth: 1000,
        paddingVertical: 0,
        paddingHorizontal: 25,
    },
});
