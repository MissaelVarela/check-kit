import { View, Text } from 'react-native';

import HeaderBar from '../integrated/HeaderBar';

export default function CheckListLogScreen() {

    return (
        <View>
            <HeaderBar buttonType="menu">Registros</HeaderBar>
            <Text>Pantalla de Registros de CheckLists</Text>
        </View>
    )
}