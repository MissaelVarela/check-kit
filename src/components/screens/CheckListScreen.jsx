import React from 'react';
import { View, Text, SectionList, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Data from '../../data/Data';
import theme from '../../utils/theme';
import { insertLog } from '../../utils/checklist'
import Sesion from '../../utils/Sesion';
import { getCurrentTime } from '../../utils/formatDate';

import Title from '../core/Title';
import Check from '../integrated/Check';
import Button from '../core/Button';
import SecundaryButton from '../core/SecundaryButton';
import TextDefault from '../core/TextDefault';
import ConfirmDialog from '../integrated/ConfirmDialog';
import HeaderBar from '../integrated/HeaderBar';

import LogContext from '../../context/LogContext';
import MessageDialog from '../integrated/MessageDialog';

export default function CheckListScreen({ navigation, route }) {

    // log es el objeto que guarda el estado de las respuestas seleccionadas del actual checklist.
    const [ log ] = React.useState({ sections: [] });

    // Obtenemos el Id del CheckList.
    const { equipmentId, checkListId } = route && route.params ? route.params : { equipmentId: 1, checkListId: 1 };

    // Buscamos la información del CheckList.
    const checkListInfo = Data.getCheckLists(checkListId);

    // Buscamos la información del Equipo.
    const equipment = Data.getEquipment(equipmentId);

    // Creando los objetos que tendran referencia algunos componentes hijo:
    const finalizeConfirmDialog = { setVisible: () => {} };
    const cancelConfirmDialog = { setVisible: () => {} };
    const successfulMessageDialog = { setVisible: () => {} };
    const errorMessageDialog = { setVisible: () => {} };

    let checklistSections;
    if (checkListInfo) {
        checklistSections  = checkListInfo.sections.map((element, index) => {
            
            if (log.sections) {
                // Creando las secciones en el checklist log.
                log.sections[index] = {
                    number: index + 1, 
                    sectionTitle: element.sectionTitle, 
                    checks: [], 
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

    function finalize() {
    
        try {
            const result = insertLog(
                checkListInfo.id, 
                equipmentId, 
                // Por pruebas se esta poniendo el id del admin
                Sesion.getUserId() ? Sesion.getUserId() : 1, 
                getCurrentTime(),
                Sesion.getUserId() ? Sesion.getUserId() : 1, 
                log,
            );
            
            if (result) {
                successfulMessageDialog.setVisible(true);
            }else {
                errorMessageDialog.setVisible(true);
            }
            
        }
        catch (error) {
            errorMessageDialog.setVisible(true);
        } 
    }

    function cancel() {
        navigation && navigation.goBack();
    }

    

    

    return (
        <LinearGradient 
            style={styles.screen}
            colors={[theme.colors.secundary, theme.colors.tertiary, theme.colors.quaternary]}>
                <LogContext.Provider
                    value={{ log: log }}>
                    <SectionList
                        style={styles.checkList}
                        contentContainerStyle={styles.checkListContent}
                        sections={checklistSections}
                        keyExtractor={(element) => element.id}
                        renderItem={({ item, index, section }) => (
                            <Check
                                style={{ marginBottom: 30 }}
                                question={item.question}
                                checkIndex={index}
                                sectionIndex={section.index}
                                answerType={item.answerType}
                                answers={item.answers}
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
                                <Title style={{ color: theme.colors.light, fontSize: theme.fontSizes.bigText }}>Check List</Title>
                                <TextDefault style={{ color: theme.colors.light, textAlign: "center" }}>Responda todas las preguntas para completar el Check List.</TextDefault>
                                <View style={{ paddingVertical: 15, flexDirection: "row", alignItems: "center" }}>
                                    <Image
                                        style={styles.image}
                                        source={equipment.image} />
                                    <View>
                                        <TextDefault style={{ color: theme.colors.light, fontWeight: theme.fontWeights.bold }}>{equipment.type}</TextDefault>
                                        <TextDefault style={{ color: theme.colors.light }}>{equipment.name}</TextDefault>
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
                </LogContext.Provider>
                
                <ConfirmDialog
                    title="Finalizar"
                    text="¿Deseas finalizar el Check List?"
                    reference={finalizeConfirmDialog}
                    onConfirm={finalize} />
                <ConfirmDialog
                    title="Cancelar"
                    text="Si cancelas el Check List ahora se perderá el progreso."
                    reference={cancelConfirmDialog}
                    onConfirm={cancel} />
                <MessageDialog
                    title="Información"
                    text="Se guardó correctamente el Check List."
                    reference={successfulMessageDialog}
                    onConfirm={() => navigation && navigation.goBack() } />
                <MessageDialog
                    title="Información"
                    text="No se pudo guardar el Check List."
                    reference={errorMessageDialog} />
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