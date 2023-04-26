import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../utils/theme.js';

export default function IconButton(props) {

    const { icon, small, onPress, style } = props;

    return(
        <TouchableOpacity
            style={[small ? styles.smallButton : styles.button, style]}
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
        width: 36,
        height: 36,
        padding: 0,
        borderRadius: 10,
    },
    smallButton:{
        width: 24,
        height: 24,
        padding: 0,
        borderRadius: 10,
    },
    image: {
        width: 36,
        height: 36,
    },
    smallImage: {
        width: 24,
        height: 24,
    }
});