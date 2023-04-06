import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'

import theme from '../../utils/theme'
import sources from '../../utils/sources'

import IconButton from '../core/IconButton'
import Title from '../core/Title'
import Subtitle from '../core/Subtitle'


export default function EquipmentCard(props) {

    const { id, image, type, name, navigation } = props

    return (
        <View style={styles.card}>
            <TouchableOpacity 
                style={styles.imageContainer}
                onPress={() => navigation.navigate("Equipment", { id: id })}>
                <Image
                    source={image}
                    style={styles.image} />
            </TouchableOpacity>
            <View style={styles.contentBackground}>
                <View style={styles.textContainer}>
                    <Title style={{ fontSize: 12, textAlign: "center" }}>{type}</Title>
                    <Subtitle style={{ fontSize: 12, textAlign: "center" }}>{name}</Subtitle>
                </View>
                <View style={styles.buttonsContainer}>
                    <IconButton icon={sources.icons.datebook} small />
                    <IconButton icon={sources.icons.maintenance} small />
                </View>
            </View>
        </View>
    )
}  

const styles = StyleSheet.create({
    card: {
        width: 140,
        height: 220,
        justifyContent: "flex-end",
        alignItems: "center",
        marginVertical: 15,
    },
    imageContainer: {
        width: 122,
        height: 122,
        position: "absolute",
        top: 0,
        zIndex: 1,
    },
    image: {
        width: 122,
        height: 122,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: theme.colors.lightDark,
    },
    contentBackground: {
        width: "100%",
        height: "90%",
        backgroundColor: theme.colors.lightDark,
        borderRadius: 10,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    textContainer: {
        width: "100%",
        height: 50,
        paddingHorizontal: 10,
        justifyContent: "center",
    },
    buttonsContainer: {
        width: "100%",
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})