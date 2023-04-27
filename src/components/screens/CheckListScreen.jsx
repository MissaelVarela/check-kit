import { View, Text, SectionList, Image, StyleSheet } from 'react-native';
import Data from '../../data/Data';
import theme from '../../utils/theme';

import Title from '../core/Title';
import Check from '../integrated/Check';
import Button from '../core/Button';
import SecundaryButton from '../core/SecundaryButton';
import TextDefault from '../core/TextDefault';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import ConfirmDialog from '../integrated/ConfirmDialog';

export default function CheckListScreen({ navigation, route }) {

    const [ checkListLog, setCheckListLog ] = React.useState({ sections: [] });

    // Obtenemos el Id del CheckList.
    const { equipmentId, checkListId } = route && route.params ? route.params : { equipmentId: 1, checkListId: 1 };

    // Buscamos la información del CheckList.
    const checkListInfo = Data.getCheckLists(checkListId);

    // Buscamos la información del Equipo.
    const equipment = Data.getEquipment(equipmentId);

    // Creando los objetos que tendran referencia algunos componentes hijo:
    const finalizeConfirmDialog = { setVisible: () => {} };
    const cancelConfirmDialog = { setVisible: () => {} };

    let checklistSections;
    if (checkListInfo) {
        checklistSections  = checkListInfo.sections.map((element, index) => {
            
            // Creando la seccion en el checklist log.
            if (checkListLog) {
                checkListLog.sections[index] = { 
                    sectionTitle: element.sectionTitle, 
                    checkList: [] 
                };
            }  
            
            return { 
                title: element.sectionTitle,
                data: element.checkList,
                index: index,
            }
        });
    }
    else {
        checklistSections = [];
    }

    React.useEffect(() => {
        if (navigation) {
            navigation.setOptions({ headerShown: false });
        }
    }, []);

    function finalize() {
        console.log(checkListLog)
        navigation && navigation.goBack();
    }

    function cancel() {
        navigation && navigation.goBack();
    }

    return (
        <LinearGradient 
            style={styles.screen}
            colors={[theme.colors.secundary, theme.colors.tertiary, theme.colors.quaternary]}>
                <SectionList
                    style={styles.checkList}
                    contentContainerStyle={styles.checkListContent}
                    sections={checklistSections}
                    keyExtractor={(element) => element.id}
                    renderItem={({ item, index, section }) => (
                            <Check
                                style={{ marginBottom: 30 }}
                                question={item.question}
                                index={index}
                                sectionIndex = {section.index}
                                answerType={item.answerType}
                                answers={item.answers}
                                checkListLog={checkListLog}
                                // Opcionales
                                elements={item.elements}
                                elementsHeader={item.elementsHeader} />
                        )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={styles.sectionContainer}>
                            <Title>{title}</Title>
                        </View>
                        
                    )}
                    ListEmptyComponent={() => (
                        <Text>No hay elementos que revisar en este checklist...</Text>
                    )}
                    ListHeaderComponent={() => (
                        <View style={styles.checkListHeader}>
                            <Title style={{color: theme.colors.light, fontSize: theme.fontSizes.bigText}}>Check List</Title>
                            <TextDefault style={{color: theme.colors.light, textAlign: "center"}}>Responda todas las preguntas para completar el Check List.</TextDefault>
                            <View style={{paddingVertical: 15, flexDirection: "row", alignItems: "center"}}>
                                <Image
                                    style={styles.image}
                                    source={equipment.image}/>
                                <View>
                                <TextDefault style={{color: theme.colors.light, fontWeight: theme.fontWeights.bold}}>{equipment.type}</TextDefault>
                                <TextDefault style={{color: theme.colors.light}}>{equipment.name}</TextDefault>
                                </View>
                            </View>
                        </View>
                    )}
                    ListFooterComponent={() => (
                        <View style={styles.checkListFooter}>
                            <SecundaryButton
                                onPress={() => cancelConfirmDialog.setVisible(true)}>
                                Cancelar
                            </SecundaryButton>
                            <Button
                                onPress={() => finalizeConfirmDialog.setVisible(true)}>
                                Finalizar
                            </Button>
                        </View>
                    )} />
                    <ConfirmDialog
                        title="Avertencia"
                        text="¿Deseas finalizar el Check List?"
                        reference={finalizeConfirmDialog}
                        onConfirm={finalize} />
                    <ConfirmDialog
                        title="Avertencia"
                        text="Si cancelas el Check List ahora se perderá el progreso."
                        reference={cancelConfirmDialog}
                        onConfirm={cancel} />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.light,
    },
    checkList: {
        paddingHorizontal: 25,
        width: "100%",
    },
    checkListContent: {
        width: "100%",
        marginHorizontal: "auto",
        maxWidth: 800,
    },
    checkListHeader: {
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 40,
    },
    checkListFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
    },
    sectionContainer: {
        backgroundColor: theme.colors.lightDark,
        marginRight: "auto",
        justifyContent: "center",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 15,
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 100,
        marginRight: 15,
    }
})