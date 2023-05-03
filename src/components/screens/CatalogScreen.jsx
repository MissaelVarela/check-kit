import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import theme from '../../utils/theme.js';
import Data from '../../data/Data.js';

import Subtitle from '../core/Subtitle.jsx';
import EquipmentCard from '../integrated/EquipmentCard.jsx';
import HeaderBar from '../integrated/HeaderBar.jsx';

import StackContext from '../../context/StackContext.js';

let equipments;

export default function CatalogScreen({navigation, route}) {
  
    const { setGoBack, catalogLocation } = React.useContext(StackContext);

    const [ title, setTitle ] = React.useState("todos los Equipos médicos");
    
    React.useEffect(() => {
        if (catalogLocation) {
            const location = catalogLocation.location;
            setTitle(location ? "Equipos médicos del " + location : "todos los Equipos médicos");
        }
    }, [catalogLocation]);

    if (!equipments) equipments = Data.getEquipments();

    const [numColumns, setNumColumns] = React.useState(2);

    function calculateNumColums(width) {
        const columnResult = Math.trunc(width / 200);

        if (columnResult != numColumns) {
            if (columnResult >= 1) 
                setNumColumns(columnResult);
        }
    }

    // Cuando CatalogScreen se cargue por primera vez.
    React.useEffect(() => {
        // Se agrega el metodo goBack para que se pueda utilizar en el contexto del Stack.
        if (navigation && setGoBack) {
            setGoBack({ method: () => navigation.goBack() });
        } 
    }, []);

    return (
        <View style={styles.screen}>
            <HeaderBar buttonType="menu">Equipos médicos</HeaderBar>
            <View style={styles.header}>
                <Subtitle>Lista de <Subtitle style={{fontWeight: theme.fontWeights.semiBold, color: theme.colors.primary}}>{title}</Subtitle></Subtitle>
                {
                    //<IconButton icon={sources.icons.catalogue} small />
                }
            </View>
            <FlatList 
                onLayout={(event) => {
                    const { width } = event.nativeEvent.layout;
                    calculateNumColums(width);
                }}
                key={numColumns}
                style={styles.list}
                contentContainerStyle={{alignItems: "center"}}
                data={equipments}
                numColumns={numColumns}
                columnWrapperStyle={numColumns === 1 ? null : {justifyContent: "center"}}
                keyExtractor={item => item.id}
                ListHeaderComponent={<></>}
                renderItem={
                    ({ item }) =>
                        <EquipmentCard
                            style={{marginHorizontal: 25}}
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
