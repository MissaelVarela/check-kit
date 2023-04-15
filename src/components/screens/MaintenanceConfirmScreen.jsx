import { View, Text, Image, StyleSheet } from 'react-native';

import theme from '../../utils/theme';
import Data from '../../data/Data';
import Section from '../integrated/Section';
import Table from '../integrated/Table';
import Button from '../core/Button';

export default function MaintenanceConfirmScreen(){

    const equipment = Data.getEquipment(7);
    const dataEquipment = [
        ["Tipo:", "Monitor SV"],
        ["Nombre descriptivo:","Azul"],
        ["Identificador:", "MSV-1"],
        ["Marca:","Philips"],
        ["Modelo:", "XXXXX"],
        ["Serie:","11111"],
        ["Ubicación:", "Laboratorio Medico"],
    ];

    const dataReponsable = [
        ["Nombre:", "Nicole Balvaneda Cruz Aguirre"],
        ["Tipo de usuario:","Alumno"],
        ["Autorizado por:", "David Garcia Torres"],
    ];

    return(
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image
                    source={equipment.image}
                    style={styles.image} />
            </View>
            <View style={styles.body}>
                <Section
                    title="Datos del Equipo">
                        <Table 
                            dataMatrix={dataEquipment}
                            columnsWidth={[ 160 ]} />
                </Section>
                <Section
                    title="Datos del Responsable">
                        <Table 
                            dataMatrix={dataReponsable}
                            columnsWidth={[ 160 ]}/>
                </Section>
                <Button>Empezar Mantenimiento</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.colors.light,
    },
    imageContainer: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 100,
    },
    body: {
        paddingHorizontal: 25,
    }
})