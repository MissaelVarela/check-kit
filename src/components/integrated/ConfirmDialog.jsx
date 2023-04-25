import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import IconButton from '../core/IconButton';
import sources from '../../utils/sources';
import TextDefault from '../core/TextDefault';
import Title from '../core/Title';
import TextButton from '../core/TextButton'

export default function ConfirmDialog(props) {

    const { text, title, children, reference, onConfirm, onCancel } = props;

    // Crear el estado de visibilidad del componente
    const [ visible, setVisible ] = React.useState(false);

    // Referenciar el estado del componente a la referencia recibida por parametros
    if (reference) {
        reference.visible = visible;
        reference.setVisible = setVisible;
    }

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
                        <View style={styles.modalBody}>
                            <Title style={styles.titleStyle}>{title}</Title>
                            <TextDefault style={{maxWidth: 450}}>{ children ? children : text }</TextDefault>
                        </View>
                        <View style={styles.modalFooter}>
                            <TextButton onPress={()=> {setVisible(false); onCancel && onCancel();}}>Cancel</TextButton>
                            <TextButton onPress={()=> {setVisible(false); onConfirm && onConfirm();}}>Confirmar</TextButton>
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
        width: "0%",
        minWidth: 250,
        maxWidth: 500,
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
    },
    titleStyle: {
        fontSize: theme.fontSizes.text, 
        textAlign: "center",
        maxWidth: 450,
    },
    modalBody: {
        paddingVertical: 20,
        paddingHorizontal: 36,
        justifyContent: "center",
    },
    modalFooter: {
        width: "100%",
        height: 40,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: theme.colors.lightDark,
        borderTopWidth: 2,
    },
    textButton: {

    }
})