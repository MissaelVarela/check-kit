import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import IconButton from '../core/IconButton';
import sources from '../../utils/sources';
import TextDefault from '../core/TextDefault';
import Title from '../core/Title';

export default function Notification(props) {

    const { text, title, visible, setVisible, children } = props;

    return(
        <Modal 
            visible={visible} 
            transparent={true} 
            statusBarTranslucent={true}
            animationType="fade" 
            nRequestClose={()=> setVisible(false)}
            style={styles.main}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <View style={styles.modalHeader}>
                            <Title style={styles.titleStyle}>{title}</Title>
                            <IconButton 
                                small 
                                icon={sources.icons.arrow} 
                                onPress={() => setVisible(false)} />
                        </View>
                        <View style={styles.modalBody}>
                            
                            <TextDefault>{ children ? children : text }</TextDefault>
                        </View>
                        <View style={styles.modalFooter}>
                            <Text>Cancel</Text>
                            <Text>Ok</Text>
                        </View>
                    </View>
                </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    main: {
    },
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(52, 52, 52, 0.25)"  
    },
    modal: {
        width: "75%",
        minWidth: 250,
        maxWidth: 500,
        //minHeight: 80,
        backgroundColor: theme.colors.light,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,   
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 25,
    },
    modalHeader: {
        paddingHorizontal: 15,
        paddingTop: 10,
        width: "100%",
        height: 34,
        flexDirection: "row",
        justifyContent: "center",
        //backgroundColor: "red"
    },
    titleStyle: {
        marginLeft: 24,
        fontSize: theme.fontSizes.text, 
        flex: 1, 
        textAlign: "center",
    },
    modalBody: {
        //flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 36,
        justifyContent: "center",
    },
    modalFooter: {
        width: "100%",
        height: 34,
        paddingHorizontal: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        //backgroundColor: "red"
    }
})
