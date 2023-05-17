import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

import theme from '../../utils/theme';
import { getLog } from '../../utils/checklist';
import sources from '../../utils/sources';
import { toDateString, toTimeString } from '../../utils/dateFormat';

import Title from '../core/Title';
import HeaderBar from '../integrated/HeaderBar';
import DataTable from '../integrated/DataTable';
import Section from '../integrated/Section';
import Subtitle from '../core/Subtitle';
import Table from '../integrated/Table';
import IconButton from '../core/IconButton';

export default function LogScreen({ navigation, route }){
    
    const [ checklistLog, setChecklistLog ] = React.useState();

    const [ data, setData ] = React.useState([]);
    const [ generalData, setGeneralData ] = React.useState([]);

    async function getData() {
        if (route && route.params) {
            const { logId } = route.params;
            if (!checklistLog || (checklistLog && checklistLog.logId != logId)) 
                var result = await getLog(logId);

            setChecklistLog(result);
        }
    } 

    function updateDate() {
        const logData = JSON.parse(checklistLog[0].data);

        if (logData) {
            const newData = [];
            logData.sections.forEach((section) => {
                const sectionRow = [
                    section.number,
                    section.sectionTitle,
                    " ",
                    " ",
                ];

                newData.push(sectionRow);

                section.checks.forEach((check) => {
                    const checkRow = [
                        section.number + "." + check.number,
                        check.question,
                        check.answers ? { answer: check.answers } : " ",
                        check.observations,
                    ];

                    newData.push(checkRow);

                    if (check.groups) {
                        check.groups.forEach((group) => {
                            const groupRow = [
                                section.number + "." + check.number + "." + group.number,
                                group.subQuestion,
                                { answer: group.answers },
                                "",
                            ];

                            newData.push(groupRow);
                        });
                    }
                })
            })

            setData(newData)
        }
    }

    // Cuando cambie el checklistLog
    React.useEffect(() => {
        if (checklistLog) {
            updateDate();
        }
    }, [checklistLog])

    React.useEffect(() => {
        // Obteniendo la información
        getData();


    }, [route.params]);

    const dataHeader = [" ", "Pregunta", "Respuesta", "Obeservaciones" ];

    
    React.useEffect(() => {
        if (checklistLog && checklistLog[0]) {

            setGeneralData([
                ["Id del Registro:", checklistLog[0].id],
                ["Fecha:", tryFormatDate(checklistLog[0].dateTime)],
                ["Tipo del Equipo:", checklistLog[0].equipmentType],
                ["Nombre del Equipo:", checklistLog[0].equipmentName],
                ["Responsable:", checklistLog[0].responsableName + " " + checklistLog[0].responsableLastName],
            ]);
        }
    }, [checklistLog]);

    function tryFormatDate(info) {
        try {
            const date = new Date(info);
            return toDateString(date) + " " + toTimeString(date);
        }
        catch {
            return info;
        }
    }

    return(
        <View style={styles.screen}>
            <HeaderBar buttonType="pop">Registros</HeaderBar>
            <ScrollView style= {styles.body}>
                <View style={{ alignItems: "center", flex: 1, width: "100%", marginVertical: 35 }}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: 30}}>
                        <View/>
                        <Title style={{ marginBottom: 15 }}>Detalles del Check List</Title>
                        <IconButton 
                            icon={sources.icons.refresh}
                            onPress={() => {
                                getData()
                            }} />
                    </View>
                    
                    <View style={styles.subtitleContairner}>
                        <Image source={sources.icons.maintenance} style={styles.icon}/> 
                        <Title style={styles.subtitle}>Datos generales:</Title>
                    </View>
                    <Table
                        style={[styles.table, {marginBottom: 50}]}
                        dataMatrix={generalData}
                        columnsWidth={[]} />
                    <View style={styles.subtitleContairner}>
                        <Image source={sources.icons.checklist} style={styles.icon}/>
                        <Title style={styles.subtitle}>Respuestas:</Title>
                    </View>
                    <DataTable
                        style={styles.table}
                        dataHeader={dataHeader}
                        dataMatrix={data}
                        columnsWidth={[40]} />
                </View>
            </ScrollView> 
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.colors.light,
    },
    body: {
        flex: 1,
        paddingHorizontal: 25,
    },
    table: {
        marginTop: 15,
        width: "100%",
        maxWidth: 1000,
    },
    subtitleContairner: {
        flex: 1,
        flexDirection: "row",
        width: "100%", 
        maxWidth: 1000, 
        justifyContent: "flex-start",
        alignItems: "center",
        
    },
    subtitle: {
        textAlignVertical: "center",
        flex: 1,
        marginLeft: 10,
        fontWeight: theme.fontWeights.semiBold
    },
    icon: {
        width: 36,
        height: 36
    }
});