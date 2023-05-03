import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import theme from '../../utils/theme';
import { getLogs } from '../../utils/checklist';

import Subtitle from '../core/Subtitle';
import Title from '../core/Title';
import SecundaryButton from '../core/SecundaryButton';
import DataTable from '../integrated/DataTable';
import HeaderBar from '../integrated/HeaderBar';

import StackContext from '../../context/StackContext.js';

let logs;

export default function LogSelectionScreen({navigation}){

    const { setGoBack } = React.useContext(StackContext);

    const [ data, setData ] = React.useState([]);

    async function getData() {
        if (!logs) logs = await getLogs();
        
        console.log(logs)
        if (logs) {
            const newData = logs.map((element) => { 
                return [ 
                    element.id, 
                    element.dateTime, 
                    element.equipmentType + "\n" + element.equipmentName,
                    element.responsableName + " " + element.responsableLastName,
                ] 
            });

            setData(newData);
        }
    } 

    React.useEffect(() => {
        // Obteniendo la información
        getData();


    }, []);

    

    const dataHeader = ["ID", "Fecha", "Equipo", "Responsable" ];
    

    // Cuando LogSelectionScreen se cargue por primera vez.
    React.useEffect(() => {
        // Se agrega el metodo goBack para que se pueda utilizar en el contexto del Stack.
        if (navigation && setGoBack) {
            setGoBack({ method: () => navigation.goBack() });
        } 
    }, []);

    return(
        <View style={styles.screen}>
            <HeaderBar buttonType="menu" >Registros</HeaderBar>
            <View style={styles.body} >
                <Title>Registros de los Check List</Title>
                <ScrollView style={styles.scroll} showsHorizontalScrollIndicator={true}>    
                    <DataTable   
                        dataHeader={dataHeader}
                        dataMatrix={data} 
                        columnsWidth={[40]} 
                        touchable
                        //onPress={()=> {navigation.navigate("Log")}}
                        // Pasando el navigation
                        navigation={navigation} />
                </ScrollView>    
                <View style={styles.bottonContainer}>
                    <View style={{flex: 1, marginRight: 10, paddingTop:50}}>
                        <SecundaryButton
                            style={{marginTop: 15 }}
                            text= "Anterior"
                            noEnable={true} />
                    </View>
                    <View style={{flex: 1, marginLeft: 10, paddingTop:50}}>
                        <SecundaryButton
                            style={{marginTop: 15 }}
                            text= "Siguiente"
                            noEnable={true} />
                    </View>
                </View>        
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
    bottonContainer: {
        flexDirection: "row",
    },
   
});