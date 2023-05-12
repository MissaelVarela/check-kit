import React from 'react';
import { View, Text } from 'react-native'

import DatePicker from '../core/test_pickers/DatePicker.jsx';
import Button from '../core/Button.jsx';
import TimePicker from '../core/test_pickers/TimePicker.jsx';


export default function Test() {

    // Creando los estados del DatePicker.
    const [ visible, setVisible ] = React.useState(false);
    const [ value, setValue ] = React.useState(new Date());

    function showDate() {
        alert(value);
    }

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Date Picker</Text>
            <TimePicker 
                value={value}
                setValue={setValue}
                visible={visible}
                setVisible={setVisible} />
            <Button onPress={showDate}>Mostrar fecha</Button>
        </View>
    )
}