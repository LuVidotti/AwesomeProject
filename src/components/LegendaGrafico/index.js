import { Text, View } from "react-native";
import estilos from "./estilos";

function LegendaGrafico({ cor, texto }) {
    return (
        <View style={estilos.container}>
            <View style={{backgroundColor: `${cor}`, width: 20, height: 20}}></View>
            <Text style={estilos.texto}>{texto}</Text>
        </View>
    )
}

export default LegendaGrafico;