import { View, Text, StyleSheet } from 'react-native'
import theme from '../../utils/theme'
import ComboBox from '../core/ComboBox'
import Subtitle from '../core/Subtitle'
import Button from '../core/Button'
import Section from '../integrated/Section'

export default function DatebookSelectionScreen() {

    return (
        <View style={styles.screen}>
            
            <Section
                title="Agenda de Equipos">
                <View>
                    <View style={styles.comboContainer}>
                        <View style={{flex: 1, marginRight: 10}}>
                            <Subtitle style={{marginBottom: 5}}>Tipo:</Subtitle>
                            <ComboBox placeHolder="Todos"/>
                        </View>
                        <View style={{flex: 1, marginLeft: 10}}>
                            <Subtitle style={{marginBottom: 5}}>Equipo:</Subtitle>
                            <ComboBox placeHolder="Todos"/>
                        </View>
                    </View>
                    <Button>Ir</Button>
                </View>
            </Section>
            
            <Section 
                title="Agenda de Áreas">
                    <Button>Ir</Button>
            </Section>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 35,
        backgroundColor: theme.colors.light
    },
    linea: {
        marginTop: 10,
        marginBottom: 20,
        width: "100%", 
        height: 2, 
        backgroundColor: theme.colors.lightDark
    },
    comboContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },

})