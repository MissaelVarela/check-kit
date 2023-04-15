import { View, Text, StyleSheet } from 'react-native'
import theme from '../../utils/theme'
import ComboBox from '../core/ComboBox'
import Subtitle from '../core/Subtitle'
import Button from '../core/Button'
import Section from '../integrated/Section'

export default function DatebookSelectionScreen() {

    const options = [
        { key: 1, value: "opcion 1" },
        { key: 2, value: "opcion 2" },
        { key: 3, value: "opcion 3" },
        { key: 4, value: "opcion 4" },
        { key: 5, value: "opcion 5" },
        { key: 6, value: "opcion 3" },
        { key: 7, value: "opcion 4" },
        { key: 8, value: "opcion 5" },
    ]

    return (
        <View style={styles.screen}>
            <Section title="Dar Mantenimineto a Equipo" contentStyle={styles.sectionContent}>
                <View style={styles.comboContainer}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Subtitle style={{ marginBottom: 5 }}>Tipo:</Subtitle>
                        <ComboBox placeHolder="Todos" options={options} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Subtitle style={{ marginBottom: 5 }}>Equipo:</Subtitle>
                        <ComboBox placeHolder="Todos" />
                    </View>
                </View>
                <Button style={styles.button}>
                    Dar Mantenimiento
                </Button>
            </Section>
            
            <Section title="Dar Mantenimiento por Rutina" contentStyle={styles.sectionContent}> 
                <Subtitle style={{marginBottom: 5}}>Rutina:</Subtitle>
                <ComboBox placeHolder="Todos"/>
                <Button style={styles.button}>
                    Dar Mantenimiento
                </Button>
            </Section>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 35,
        alignItems: "center",
        backgroundColor: theme.colors.light
    },
    comboContainer: {
        flexDirection: "row",
    },
    sectionContent: {
        width: "100%",
        maxWidth: 600,
        marginHorizontal: "auto",
    },
    button: {
        marginTop: 25,
    }

})