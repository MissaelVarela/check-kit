import React from 'react';
import { View, StyleSheet } from 'react-native';
import RadioButton from '../../../core/RadioButton';

import LogContext from '../../../../context/LogContext';

export default function RadioButtonAnswer({ answers, sectionIndex, checkIndex }){
    
    const { log } = React.useContext(LogContext); 

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
                        onChecked={() => { 
                            setSelected(index);
                            if (log && log.sections) {
                                log.sections[sectionIndex].checks[checkIndex].answers = element;
                            }
                        }}
                        onUnchecked={() => {
                            setSelected(null);
                            if (log && log.sections) {
                                log.sections[sectionIndex].checks[checkIndex].answers = undefined;
                            }
                        }}>
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