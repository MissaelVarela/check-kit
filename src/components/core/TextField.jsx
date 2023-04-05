import { TextInput, StyleSheet } from 'react-native';
import theme from '../../utils/theme.js';

export default function TextField(props) {

    const { placeHolder, onTextChange, password } = props;

    return (
        <TextInput
            style={styles.textInput}
            placeholder={placeHolder}
            onChange={event => onTextChange(event.nativeEvent.text)}
            secureTextEntry={password}/>
    )

}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: theme.colors.light,
        borderWidth: 0,
        borderColor: theme.colors.darkLight,
        borderRadius: 10,
        maxWidth: 300,
        height: 32,
        width: "100%",
        paddingHorizontal: 15,
        color: theme.colors.dark,
    },
});