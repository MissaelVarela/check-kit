import React from 'react';
import { View, Modal, TouchableWithoutFeedback, Image, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

export default function ImageViewer(props) {

    const { imageSource, shown, setShown } = props;

    const dimensions = useWindowDimensions();

    const windowWidth = dimensions.width;
    const windowHeight = dimensions.height;

    let imageWidth = 100;
    let imageHeight = 100;

    if (windowWidth < windowHeight) {
        imageWidth = windowWidth - windowWidth * 0.2;
        imageHeight = imageWidth;
    }
    else {
        imageHeight = windowHeight - windowHeight * 0.2;
        imageWidth = imageHeight;
    }
    

    return (
        <Modal
            visible={shown}
            transparent={true}
            statusBarTranslucent={true}
            animationType="fade"
            onRequestClose={() => setShown(false)}>
            <TouchableWithoutFeedback
                onPress={() => setShown(false)}>
                <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback>
                        <View style={styles.imageContainer}>
                            <Image
                                style={[styles.image, {width: imageWidth, height: imageHeight}]}
                                source={imageSource}
                                resizeMode='contain'/>
                        </View>
                        
                    </TouchableWithoutFeedback>
                    
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(52, 52, 52, 0.9)",
    },
    imageContainer: {
        //backgroundColor: "rgba(255, 255, 255, 1)",
        //padding: 20,
        //borderRadius: 20,
    },
    image: {
        maxWidth: 700,
        maxHeight: 700,
    },
})