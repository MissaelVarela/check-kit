import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import theme from '../../utils/theme';

export default function Notification(props) {

    const { visible, setVisible, children } = props;

    return(
        <Modal 
            visible={visible} 
            transparent={true} 
            statusBarTranslucent 
            animationType="slide" 
            style={styles.main}>

            <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text>{children}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    main: {
        
    },
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        //backgroundColor: "rgba(52, 52, 52, 0.5)"  
    },
    modal: {
        width: 250,
        minHeight: 80,
        backgroundColor: theme.colors.light,
        shadowColor: "black",
        shadowOffset: {width: 10, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,   
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 25,
    },
})
