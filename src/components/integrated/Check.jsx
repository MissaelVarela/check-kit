import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Subtitle from '../core/Subtitle';
import Title from '../core/Title';
import theme from '../../utils/theme';
import CheckBox from '../core/CheckBox';
import TextField from '../core/TextField';
import Table from './Table';

import RadioButtonAnswer from './check/checkAnswers/RadioButtonAnswer';
import CheckBoxAnswer from './check/checkAnswers/CheckBoxAnswer';
import TableAnswer from './check/checkAnswers/TableAnswer';

import LogContext from '../../context/LogContext';

export default function Check({ question, checkIndex, sectionIndex, answerType, answers, elements, elementsHeader, style }){

    const { log } = React.useContext(LogContext);
    
    // Creando el Check en el log.
    if (log && log.sections) { 
        console.log(sectionIndex, checkIndex)
        log.sections[sectionIndex].checks[checkIndex] = { 
            number: checkIndex + 1,
            question: question,
            // crear el arreglo de answers. 
        };  
    }

    function selectAnswerType(answerType) {
        switch(answerType) {
            case 0: 
                return <></>
            case 1:
                return <RadioButtonAnswer 
                        answers={answers} 
                        sectionIndex={sectionIndex} 
                        checkIndex={checkIndex} />
            case 2: 
                return <CheckBoxAnswer 
                        answers={answers}
                        sectionIndex={sectionIndex}
                        checkIndex={checkIndex} />
            case 3:
                return <></>
            case 4:
                return <TableAnswer 
                            stlye={{marginHorizontal: 0, marginBottom: 20}}
                            answers={answers} 
                            elements={elements} 
                            elementsHeader={elementsHeader}
                            columnsWidth={[]}
                            sectionIndex={sectionIndex} 
                            checkIndex={checkIndex} />
            default: 
                return <></>
        }
    }

    return (
        <View style={[styles.main, style]}>
            <View style={styles.header}>
                <Subtitle style={{flex: 1, textAlignVertical: "center"}}>
                    {question}
                </Subtitle>
                <Title style={{marginLeft: 10}}>
                    {checkIndex + 1}
                </Title>
            </View>
            <View style={styles.answersContainer}>
                { selectAnswerType(answerType) }
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

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.lightDark,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    answersContainer: {
        marginTop: 15,
    },
    observationContainer: {
        marginBottom: 10,
    }
})