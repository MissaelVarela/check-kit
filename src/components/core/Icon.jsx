import { Image, StyleSheet } from 'react-native';

export default function Icon(props) {

    const { icon, small, style } = props;

    return(
        <Image
            style={[small ? styles.smallImage : styles.image, style]}    
            source={icon} />
    )
}

const styles = StyleSheet.create({
        image: {
        width: 36,
        height: 36,
    },
    smallImage: {
        width: 24,
        height: 24,
    }
});