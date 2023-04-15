import React from "react";
import { View, ScrollView, Text, Modal, TouchableWithoutFeedback, TouchableHighlight, StyleSheet } from "react-native";

import theme from "../../utils/theme.js";
import sources from "../../utils/sources.js";

import IconButton from "./IconButton"

export default function ComboBox(props) {

    const { placeHolder, options, onSelectChange, style } = props;
    const [shownSelector, setShownSelector] = React.useState(false);
    const [selected, setSelected] = React.useState({ key: -1, value: placeHolder ? placeHolder : "Sin seleccionar" });

    return (
        <View>
            <View style={[styles.comboBox, style]}>
                <Text numberOfLines={1} style={[styles.text, selected.key === -1 ? { color: theme.colors.darkLight } : { color: theme.colors.dark }]}>
                    {selected.value}
                </Text>
                <IconButton
                    icon={sources.icons.arrow}
                    //small
                    onPress={() => setShownSelector(!shownSelector)} />
            </View>

            <Modal
                visible={shownSelector}
                transparent={true}
                statusBarTranslucent={true}
                animationType="fade"
                onRequestClose={() => setVisible(false)}>
                <TouchableWithoutFeedback
                    onPress={() => setShownSelector(false)}>
                    <View style={styles.modalContainer}>
                        <ScrollView style={styles.modal} showsVerticalScrollIndicator={false}>
                            {
                                options && options.map((element, index) =>
                                    <TouchableHighlight

                                        key={element.key}
                                        underlayColor={theme.colors.quaternary}
                                        onPress={() => {
                                            setSelected({ key: element.key, value: element.value });
                                            setShownSelector(false);
                                        }} >
                                        <View
                                            style={[
                                                styles.option,
                                                //index === options.length - 1 ? { borderBottomWidth: 0 } : null,
                                                index % 2 === 0 ? null : { backgroundColor: theme.colors.lightDark },
                                                //index === 0 ? {borderTopLeftRadius: 20, borderTopRightRadius: 20} : null,
                                                //index === options.length - 1 ? {borderBottomLeftRadius: 20, borderBottomRightRadius: 20} : null
                                            ]} >
                                            <Text>{element.value ? element.value : ""}</Text>

                                        </View>
                                    </TouchableHighlight>
                                )
                            }
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    comboBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        backgroundColor: theme.colors.light,
        borderColor: theme.colors.darkLight,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    text: {
        flex: 1,
        marginRight: 15,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(52, 52, 52, 0.25)",
    },
    modal: {
        flexGrow: 0,
        width: "80%",
        maxWidth: 350,
        minHeight: 40,
        maxHeight: 415,
        borderRadius: 20,
        backgroundColor: theme.colors.light
    },
    option: {
        marginHorizontal: 18,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },

});