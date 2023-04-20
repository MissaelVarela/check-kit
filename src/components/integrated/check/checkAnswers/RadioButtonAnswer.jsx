import { View, StyleSheet } from 'react-native';
import RadioButton from '../../../core/RadioButton';


export default function RadioButtonAnswer({ answers }){
    return (
        <View style={[{flexDirection: "row", flexWrap: "wrap"}]}>
            {
                answers.map((element, index) => (
                    <RadioButton 
                        style={{marginRight: 15, marginBottom: 15}}
                        key={index}>
                        {element}
                    </RadioButton>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    
})