import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import theme from '../../utils/theme';
import sources from '../../utils/sources';
import { getLogs } from '../../utils/checklist';
import { toDateString, toTimeString } from '../../utils/dateFormat';

import Subtitle from '../core/Subtitle';
import Title from '../core/Title';
import SecundaryButton from '../core/SecundaryButton';
import DataTable from '../integrated/DataTable';
import HeaderBar from '../integrated/HeaderBar';
import IconButton from '../core/IconButton';

import StackContext from '../../context/StackContext.js';

let logs;

export default function LogSelectionScreen({navigation}){

    const { setGoBack, setPop } = React.useContext(StackContext);

    const [ data, setData ] = React.useState([]);

    async function getData() {
        logs = await getLogs();
        
        if (logs) {
            const newData = logs.map((element, index) => { 

                return [ 
                    index + 1 + ".", 
                    tryFormatDate(element.dateTime), 
                    { title: element.equipmentType, text: element.equipmentName},
                    element.responsableName + " " + element.responsableLastName,
                ] 
            });

            setData(newData);
        }
    } 

    function tryFormatDate(info) {

        try {
            const date = new Date(info);

            return { title: toDateString(date), text: toTimeString(date) };
        }
        catch {
            return info;
        }
    }

    React.useEffect(() => {
        // Obteniendo la información
        getData();


    }, []);

    

    const dataHeader = [" ", "Fecha", "Equipo", "Responsable" ];
    

    // Cuando LogSelectionScreen se cargue por primera vez.
    React.useEffect(() => {
        // Se agrega el metodo goBack para que se pueda utilizar en el contexto del Stack.
        if (navigation) {
            if (setGoBack) 
                setGoBack({ method: () => navigation.goBack() });
            if (setPop)
                setPop({ method: () => navigation.pop() });
        } 
    }, []);

    return(
        <View style={styles.screen}>
            <HeaderBar buttonType="menu" >Registros</HeaderBar>
            <View style={styles.body} >
                <View style={{alignItems: "center", flex: 1, width: "100%"}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: 30}}>
                        <View/>
                        <Title>Registros de los Check List</Title>
                        <IconButton
                            icon={sources.icons.refresh}
                            onPress={() => {
                                getData()
                            }} />
                    </View>
                    
                    <ScrollView style={styles.scroll} showsHorizontalScrollIndicator={true}>
                        <DataTable
                            style={styles.table}
                            dataHeader={dataHeader}
                            dataMatrix={data}
                            columnsWidth={[30]}
                            touchable
                            onPress={(row) => navigation.navigate("Log", { logId: logs && logs[row].id }) } />
                    </ScrollView>  
                </View>
                  
                {
                    // IMPLEMENTAR: Botones de navegacion...
                    /*
                    <View style={styles.bottonContainer}>
                        <View style={{ flex: 1, marginRight: 10, paddingTop: 50 }}>
                            <SecundaryButton
                                style={{ marginTop: 15 }}
                                text="Anterior"
                                noEnable={true} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10, paddingTop: 50 }}>
                            <SecundaryButton
                                style={{ marginTop: 15 }}
                                text="Siguiente"
                                noEnable={true} />
                        </View>
                    </View>  
                    */
                }
                      
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
        paddingVertical: 35,
        paddingHorizontal: 25,
    },
    scroll: {
        flex: 1,
        marginTop: 15,
        width: "100%",
        maxWidth: 1000,
    },
    bottonContainer: {
        flexDirection: "row",
    },
    table: {
        width: "100%",
    }
   
});