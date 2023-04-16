import { View, Text, SectionList, StyleSheet } from 'react-native';
import Data from '../../data/Data';
import theme from '../../utils/theme';

import Title from '../core/Title';
import Check from '../integrated/Check';

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
                sections={checklists}
                keyExtractor={(element) => element.id }
                renderItem={({item, index}) => (
                    <Check
                        style={{marginBottom: 30}}
                        title={item.title} 
                        number={index + 1} 
                        optionType={item.inputType} 
                        options={item.options} />
                )} 
                renderSectionHeader={({section: {title}}) => (
                    <Title>{title}</Title>
                )}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 35,
        padding: 25,
    },
})