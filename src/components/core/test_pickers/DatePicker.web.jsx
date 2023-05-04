import React from 'react';
import { View, Text } from 'react-native';

export default function DatePicker(props) {

    const { reference, timeMode } = props;
    
    const inputRef = React.useRef(null);
    const onButtonClick = () => {
        // `current` apunta al elemento de entrada de texto montado
        inputRef.current.focus();
    };

    function getData() {
        console.log("El valor es: ");
        if (inputRef && inputRef.current) {
            
            
        }
    }

    React.useEffect(() => {
        if (reference) {
            console.log("Entre aca  ")
            reference.getData = () => { console.log("Pidiendo datos") }; 
         } 
    }, [])

    return (
        <View>
            {
                timeMode
                ?
                    <input style={{height: 36}} ref={inputRef} type='time'></input> 
                :
                    <input style={{height: 36}} ref={inputRef} type='date'></input>
            }
            
        </View>
    )
}