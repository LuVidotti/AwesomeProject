import { Text, TouchableOpacity, View } from "react-native";
import Nota from "../../components/Nota";
import estilos from "./estilos";
import { PesquisaContext } from "../../context/PesquisaContext";
import { useContext } from "react";

function ColetaDados({ route, navigation }) {
    const { nome, id } = route.params;
    const { votarPessimo, votarRuim, votarNeutro, votarBom, votarExcelente } = useContext(PesquisaContext);

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>O que você achou do {nome}?</Text>
            <View style={estilos.notasContainer}>
                <TouchableOpacity onPress={() => {votarPessimo(id); navigation.navigate("Agradecimento")}}><Nota icon="face-angry" texto="Péssimo" tamanho={30} cor="#D71616"/></TouchableOpacity>
                <TouchableOpacity onPress={() => {votarRuim(id); navigation.navigate("Agradecimento")}}><Nota icon="face-frown" texto="Ruim" tamanho={30} cor="#FF360A"/></TouchableOpacity>
                <TouchableOpacity onPress={() => {votarNeutro(id); navigation.navigate("Agradecimento")}}><Nota icon="face-meh" texto="Neutro" tamanho={30} cor="#FFC632"/></TouchableOpacity>
                <TouchableOpacity onPress={() => {votarBom(id); navigation.navigate("Agradecimento")}}><Nota icon="face-smile" texto="Bom" tamanho={30} cor="#37BD6D"/></TouchableOpacity>
                <TouchableOpacity onPress={() => {votarExcelente(id); navigation.navigate("Agradecimento")}}><Nota icon="face-laugh" texto="Excelente" tamanho={30} cor="#25BC22"/></TouchableOpacity>
            </View>            
        </View>
    )
}

export default ColetaDados;