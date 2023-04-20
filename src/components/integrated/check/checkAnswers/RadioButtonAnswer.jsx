import React from 'react';
import { View, StyleSheet } from 'react-native';
import RadioButton from '../../../core/RadioButton';

export default function RadioButtonAnswer({ answers }){
    
    const [ selected, setSelected ] = React.useState(null);

    return (
        <View style={[{flexDirection: "row", flexWrap: "wrap"}]}>
            {
                answers.map((element, index) => (
                    <RadioButton 
                        style={{marginRight: 15, marginBottom: 15}}
                        key={index}
                        myIndex={index}
                        selected={selected}
                        onChecked={() => setSelected(index)}
                        onUnchecked={() => setSelected(null)}>
                        {element}
                    </RadioButton>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    
})