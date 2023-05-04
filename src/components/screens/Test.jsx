import { View, Text } from 'react-native'
import { Platform } from 'react-native';
import DatePickerW from '../core/test_pickers/DatePicker.web.jsx';
import DatePickerA from '../core/test_pickers/DatePicker.android.jsx';


export default function Test() {

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Date Picker</Text>
            {
                Platform.OS === 'web'
                    ?
                    <DatePickerW></DatePickerW>
                    :
                    <DatePickerA></DatePickerA>
            }
        </View>
    )
}