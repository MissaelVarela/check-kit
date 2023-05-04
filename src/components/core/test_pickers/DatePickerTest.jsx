import DatePickerW from '../core/pickers/DatePicker.web';
import DatePickerA from '../core/pickers/DatePicker.android';

import { View, Text, Platform } from 'react-native'

export default function DatePickerTest(props) {


    switch(Platform.OS) {
        case "web": 
            return (
                <DatePickerW {...props} />
            )
        case "android":
            return (
                <DatePickerA {...props} />
            )
        default:  
            return (
                <DatePickerW {...props} />
            )
    }
}