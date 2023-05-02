import React from 'react';
import { View, StyleSheet } from 'react-native';
import CheckBox from '../../../core/CheckBox';

import LogContext from '../../../../context/LogContext';

export default function CheckBoxAnswer({ answers, sectionIndex, checkIndex }){

    const { log } = React.useContext(LogContext); 

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
                    </CheckBox>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    
})