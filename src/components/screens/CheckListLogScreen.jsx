import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import theme from '../../utils/theme';

import Subtitle from '../core/Subtitle';
import Title from '../core/Title';
import SecundaryButton from '../core/SecundaryButton';
import HeaderBar from '../integrated/HeaderBar';


export default function CheckListLogScreen({navigation}){

    return(
        <View style={styles.screen}>
            <HeaderBar buttonType="menu">Registros</HeaderBar>
            <View style= {styles.screenBord}>
                <Title>Registro para CheckList</Title>
                <Subtitle>Registros para Checklist</Subtitle>
                    <View >
                        
                    </View>
                     <View style={styles.comboContainer }>
                        <View style={{flex: 1, marginRight: 10, paddingTop:50}}>
                            <SecundaryButton
                            style={{marginTop:15 }}
                            text= "Anterior"/>
                        </View>
                        <View style={{flex: 1, marginLeft: 10, paddingTop:50}}>
                            <SecundaryButton
                             style={{marginTop:15, }}
                             text= "Siguiente"/>
                        </View>
                     </View>
            </View> 


        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 35,
        alignItems: "center",
        backgroundColor: theme.colors.lightDark
    },
    comboContainer: {
        flexDirection: "row",
    },
    screenBord: {
        padding:35,
        borderRadius:10,
        alignItems: "center",
        backgroundColor: theme.colors.light,
       
        width: "100%"
    }
});