import { View, StyleSheet } from 'react-native';


export default function CheckBoxAnswer({ options }){
    return (
        <View style={[{flexDirection: "row", flexWrap: "wrap"}]}>
            {
                options.map((element, index) => (
                    <CheckBox 
                        style={{marginRight: 15, marginBottom: 15}}
                        key={index}>
                        {element}
                    </CheckBox>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    
})