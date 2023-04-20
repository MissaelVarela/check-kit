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


export default function Check({ question, number, answerType, answers, elements, elementsHeader, style }){

    function selectAnswerType(answerType) {
        switch(answerType) {
            case 0: 
                return <></>
            case 1:
                return <RadioButtonAnswer answers={answers}/>
            case 2: 
                return <CheckBoxAnswer answers={answers}/>
            case 3:
                return <></>
            case 4:
                return <TableAnswer 
                            answers={answers} 
                            elements={elements} 
                            elementsHeader={elementsHeader} />
            default: 
                return <></>
        }
    }

    return (
        <View style={[styles.main, style]}>
            <View style={styles.header}>
                <Subtitle>
                    {question}
                </Subtitle>
                <Title style={{marginLeft: 30}}>
                    {number}
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