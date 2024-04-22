import { Text, TouchableOpacity, View } from "react-native";
import Nota from "../../components/Nota";
import estilos from "./estilos";

function ColetaDados({ route, navigation }) {
    const { nome } = route.params

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>O que você achou do {nome}?</Text>
            <View style={estilos.notasContainer}>
                <TouchableOpacity><Nota icon="face-angry" texto="Péssimo" tamanho={30} cor="#D71616"/></TouchableOpacity>
                <TouchableOpacity><Nota icon="face-frown" texto="Ruim" tamanho={30} cor="#FF360A"/></TouchableOpacity>
                <TouchableOpacity><Nota icon="face-meh" texto="Neutro" tamanho={30} cor="#FFC632"/></TouchableOpacity>
                <TouchableOpacity><Nota icon="face-smile" texto="Bom" tamanho={30} cor="#37BD6D"/></TouchableOpacity>
                <TouchableOpacity><Nota icon="face-laugh" texto="Excelente" tamanho={30} cor="#25BC22"/></TouchableOpacity>
            </View>            
        </View>
    )
}

export default ColetaDados;