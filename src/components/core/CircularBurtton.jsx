import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../utils/theme.js';

export default function CircularButton(props) {

    const { icon, small, color, onPress, style, imageStyle } = props;

    return(
        <TouchableOpacity
            style={ [small ? styles.smallButton : styles.button, color && {backgroundColor: color}, style] }
            onPress={onPress}
            underlayColor={theme.colors.secundary}>
            <Image
                style={small ? styles.smallImage : styles.image}    
                source={icon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 54,
        height: 54,
        borderRadius: 100,
        backgroundColor: theme.colors.primary,
    },
    smallButton:{
        width: 24,
        height: 24,
        borderRadius: 100,
    },
    image: {
        width: 54,
        height: 54,
    },
    smallImage: {
        width: 24,
        height: 24,
    }
});