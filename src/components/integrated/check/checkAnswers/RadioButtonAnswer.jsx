import React from 'react';
import { View, StyleSheet } from 'react-native';
import RadioButton from '../../../core/RadioButton';

export default function RadioButtonAnswer({ answers }){
    
    const [ selected, setSelected ] = React.useState(null);

    return (
        <View style={styles.main}>
            {
                answers.map((element, index) => (
                    <RadioButton 
                        style={{marginRight: 15, marginBottom: 20}}
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
    main: {
        flex: 1,
        flexDirection: "row", 
        flexWrap: "wrap",
    }
})