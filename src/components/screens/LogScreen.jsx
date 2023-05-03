import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import theme from '../../utils/theme';
import { getLog } from '../../utils/checklist';

import Title from '../core/Title';
import HeaderBar from '../integrated/HeaderBar';
import DataTable from '../integrated/DataTable';

let checklistLog;

export default function LogScreen({ navigation, route }){

    const [ data, setData ] = React.useState([]);

    console.log(route)

    async function getData() {
        if (route && route.params) {

            const { logId } = route.params;
            if (!checklistLog) checklistLog = await getLog(logId);
        
            console.log(checklistLog)

            const logData = JSON.parse(checklistLog[0].data);

            console.log( logData)

            if (logData) {

                const newData = logData.sections.map((section) => {
                    const sectionRow = [
                        section.number,
                        section.sectionTitle,
                    ];

                    const checkRows = section.checks.map((check) => {
                        return [
                            section.number + "." + check.number,
                            check.question,
                            check.answers,
                            // Aqui ira el comentario
                            "...",
                        ]
                    })

                    return checkRows;
                });

                
                let array = [];

                newData.forEach((section, index) => {
                    section.forEach((check, index) => {
                        array.push(check);
                    }) 
                    
                })

                console.log(array)
                setData(array)    
    
        } 
        
        }
    } 

    React.useEffect(() => {
        // Obteniendo la información
        getData();


    }, []);

    const dataHeader = ["Num", "Pregunta", "Respuesta", "Obeservaciones" ];

    const data2 = [
        ["Num", "Pregunta", "Respuesta", "Obeservaciones" ],
        ["Num", "Pregunta", "Respuesta", "Obeservaciones" ],
        ["Num", "Pregunta", "Respuesta", "Obeservaciones" ],
    ]

    return(
        <View style={styles.screen}>
            <HeaderBar buttonType="back">Registros</HeaderBar>
            <View style= {styles.body}>
                <Title style={{marginBottom: 15}}>Detalles del Check List</Title>
                <ScrollView style={styles.scroll}>
                    <DataTable   
                        dataHeader={dataHeader}
                        dataMatrix={data} 
                        columnsWidth={[40]} />
                </ScrollView>
                
            </View> 
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
        padding: 35,
    },
    scroll: {
        flex: 1,
        marginTop: 15,
        width: "100%",
    },
});