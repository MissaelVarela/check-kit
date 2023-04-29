import { TextInput, StyleSheet } from 'react-native';
import theme from '../../utils/theme.js';

export default function TextField(props) {

    const { placeHolder, onTextChange, password, multiline, shownBorder, style } = props;

    return (
        <TextInput
            style={[styles.textInput, shownBorder && {borderWidth: 2}, style]}
            placeholder={placeHolder}
            onChange={event => onTextChange && onTextChange(event.nativeEvent.text)}
            secureTextEntry={password}

            multiline={multiline}
            maxLength={255} />
    )

}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: theme.colors.light,
        borderWidth: 0,
        borderColor: theme.colors.darkLight,
        borderRadius: 10,
        //maxWidth: 300,
        height: 36,
        width: "100%",
        paddingVertical: 6,
        paddingHorizontal: 15,
        color: theme.colors.dark,
    },
});