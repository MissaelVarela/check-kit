import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import TextDefault from '../core/TextDefault';
import Title from '../core/Title';
import TextButton from '../core/TextButton'

export default function MessageDialog(props) {

    const { text, title, minWidth, onConfirm, children, reference } = props;

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
            RequestClose={()=> setVisible(false)}
            style={styles.main}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <View style={styles.modalBody}>
                            <Title style={styles.titleStyle}>{title}</Title>
                            <TextDefault style={{maxWidth: 450, textAlign: "center",}}>{children ? children : text}</TextDefault>
                        </View>
                        <View style={styles.modalFooter}>
                            <TextButton onPress={() => {setVisible(false); onConfirm && onConfirm()}}>Ok</TextButton>
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
        paddingHorizontal: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(52, 52, 52, 0.25)"  
    },
    modal: {
        width: "100%",
        minWidth: 245,
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
        paddingHorizontal: 0,
        paddingTop: 10,
        width: "100%",
        height: 34,
        flexDirection: "row",
        justifyContent: "center",
    },
    titleStyle: {
        fontSize: theme.fontSizes.text, 
        textAlign: "center",
        marginBottom: 5,
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
        justifyContent: "center",
        alignItems: "center",
        borderColor: theme.colors.lightDark,
        borderTopWidth: 2,
    },
})