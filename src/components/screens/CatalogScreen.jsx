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

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Subtitle>Lista de Equipos Medicos</Subtitle>
                <IconButton icon={sources.icons.catalogue} small />
            </View>
            <FlatList style={styles.list}
                data={equipments}
                numColumns={2}
                columnWrapperStyle={{justifyContent: "space-between"}}
                keyExtractor={item => item.id}
                ListHeaderComponent={<></>}
                renderItem={
                    ({ item }) =>
                        <EquipmentCard
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
        width: "100%",
        height: "100%",
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
        height: "100%",
        paddingVertical: 0,
        paddingHorizontal: 40,
        width: "100%",
        minWidth: 360,
        maxWidth: 400,
    },
});
