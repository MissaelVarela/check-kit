import { View, Text, StyleSheet } from 'react-native';
import Subtitle from '../core/Subtitle';
import Title from '../core/Title';
import theme from '../../utils/theme';
import CheckBox from '../core/CheckBox';
import TextField from '../core/TextField';

export default function Check({ title, number, optionType, options, style }){

    return (
        <View style={[styles.main, style]}>
            <View style={styles.header}>
                <Subtitle>
                    {title}
                </Subtitle>
                <Title style={{marginLeft: 30}}>
                    {number}
                </Title>
                
            </View>
            <View style={styles.optionsContainer}>
                {
                    optionType === 1 
                    ?
                        <CheckOptions options={options}/>
                    :
                        null
                }
            </View>
            <View style={styles.observationContainer}>
                <TextField 
                    style={{height: 70}}
                    placeHolder="Observaciones" 
                    multiline />
            </View>
        </View>
    )
}

function CheckOptions({options}){

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
    main: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.lightDark,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    optionsContainer: {

    },
    observationContainer: {
        marginBottom: 10,
    }
})