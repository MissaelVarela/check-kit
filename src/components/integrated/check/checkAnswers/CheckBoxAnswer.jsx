import React from 'react';
import { View, StyleSheet } from 'react-native';
import CheckBox from '../../../core/CheckBox';

export default function CheckBoxAnswer({ answers }){

    const [ selected, setSelected ] = React.useState(null);

    return (
        <View style={[{flexDirection: "row", flexWrap: "wrap"}]}>
            {
                answers.map((element, index) => (
                    <CheckBox 
                        style={{marginRight: 15, marginBottom: 15}}
                        key={index}
                        myIndex={index}
                        selected={selected}
                        onChecked={() => setSelected(index)}
                        onUnchecked={() => setSelected(null)}>
                        {element}
                    </CheckBox>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    
})