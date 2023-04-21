import { View, Text, SectionList, StyleSheet } from 'react-native';
import Data from '../../data/Data';
import theme from '../../utils/theme';

import Title from '../core/Title';
import Check from '../integrated/Check';
import Button from '../core/Button';

export default function CheckListScreen() {

    const result = Data.getCheckLists(1);

    const checklists = result.sections.map((element) => { 
        return { 
            title: element.title,
            data: element.checkList,
        }
    })

    return (
        <View style={styles.screen}>
            <SectionList
                style={styles.checkList}
                sections={checklists}
                keyExtractor={(element) => element.id }
                renderItem={({item, index}) => (
                    <Check
                        style={{marginBottom: 30}}
                        question={item.question} 
                        number={index + 1} 
                        answerType={item.answerType} 
                        answers={item.answers}
                        // Opcionales
                        elements={item.elements}
                        elementsHeader={item.elementsHeader} />
                )} 
                renderSectionHeader={({section: {title}}) => (
                    <Title style={{marginBottom: 15}}>{title}</Title>
                )}
                ListFooterComponent={() => ( 
                    <View style={{alignItems:"flex-end"}}>
                        <Button>
                            Finalizar
                        </Button>
                    </View>
                )} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingVertical: 25,
        alignItems: "center",
        backgroundColor: theme.colors.light
    },
    checkList: {
        width: "100%",
        maxWidth: 600,
        paddingHorizontal: 20,
    }
})