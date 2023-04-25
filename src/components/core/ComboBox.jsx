import React from "react";
import { View, ScrollView, Text, Modal, TouchableWithoutFeedback, TouchableHighlight, StyleSheet } from "react-native";

import theme from "../../utils/theme.js";
import sources from "../../utils/sources.js";

import IconButton from "./IconButton"

function Item({value, label, index, setSelected, setShownSelector, onSelectChange}) {
    
    return (
        <TouchableHighlight
            underlayColor={theme.colors.quaternary}
            onPress={() => {
                setSelected({ value: value, label: label });
                setShownSelector(false);
                if (onSelectChange) onSelectChange(value, label);
            }} >
            <View
                style={[
                    styles.option,
                    //index === options.length - 1 ? { borderBottomWidth: 0 } : null,
                    index % 2 === 0 ? null : { backgroundColor: theme.colors.lightDark },
                    //index === 0 ? {borderTopLeftRadius: 20, borderTopRightRadius: 20} : null,
                    //index === options.length - 1 ? {borderBottomLeftRadius: 20, borderBottomRightRadius: 20} : null
                ]} >
                <Text numberOfLines={1}>{label ? label : "Sin nombre"}</Text>

            </View>
        </TouchableHighlight>
    )
}

export default function ComboBox(props) {

    const { placeHolder, options, onSelectChange, selected, setSelected, style } = props;
    const [shownSelector, setShownSelector] = React.useState(false);

    React.useEffect(() => {
        if (setSelected) setSelected({ value: -1, label: placeHolder ? placeHolder : "<Sin seleccionar>" });
    }, []);
    

    return (
        <View>
            <View style={[styles.comboBox, style]}>
                <Text numberOfLines={1} style={[styles.text, selected && selected.value === -1 ? { color: theme.colors.darkLight } : { color: theme.colors.dark }]}>
                    {selected && selected.label}
                </Text>
                <IconButton
                    icon={sources.icons.arrow_down}
                    //small
                    onPress={() => setShownSelector(!shownSelector)} />
            </View>

            <Modal
                visible={shownSelector}
                transparent={true}
                statusBarTranslucent={true}
                animationType="fade"
                onRequestClose={() => setShownSelector(false)}>
                <TouchableWithoutFeedback
                    onPress={() => setShownSelector(false)}>
                    <View style={styles.modalContainer}>
                        <ScrollView 
                            style={styles.modal} 
                            showsVerticalScrollIndicator={true}
                            persistentScrollbar={true}
                            scroll >
                            <Item
                                key={-1} 
                                value={-1} 
                                label={placeHolder ? placeHolder : "<Sin seleccionar>"} 
                                index={-1}
                                setSelected={setSelected}
                                setShownSelector={setShownSelector}
                                onSelectChange={onSelectChange} />
                                
                            {
                                options && options.map((element, index) =>
                                    <Item 
                                        key={element.value} 
                                        value={element.value} 
                                        label={element.label} 
                                        index={index}
                                        setSelected={setSelected}
                                        setShownSelector={setShownSelector}
                                        onSelectChange={onSelectChange} />
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
        maxWidth: 500,
        minHeight: 40,
        maxHeight: 500,
        borderRadius: 0,
        backgroundColor: theme.colors.light
    },
    option: {
        marginHorizontal: 0,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

});