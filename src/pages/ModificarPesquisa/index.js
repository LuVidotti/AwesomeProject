import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Input from "../../components/Input";
import Icon from "react-native-vector-icons/FontAwesome";
import estilos from "./estilos";
import BotaoPadrao from "../../components/BotaoPadrao";
import { useState } from "react";

function ModificarPesquisa({ route, navigation }) {
    const { nome, data, imagem } = route.params;

    const [nomeInput, setNomeInput] = useState(nome);
    const [dataInput, setDataInput] = useState(data);

    return (
        <View style={estilos.container}>
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Nome</Text>
                <Input valor={nomeInput} isPassword={false}/>
            </View>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Data</Text>
                <View style={estilos.inputData}>
                    <TextInput value={dataInput} style={estilos.input}/>
                    <Icon name="calendar" style={{color: "#939393", backgroundColor: "#FFFFFF", fontSize: 20}}/>
                </View>
            </View>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Imagem</Text>
                <TouchableOpacity style={estilos.inputImagem}>
                    <Image source={imagem} alt="Imagem da pesquisa"/>
                </TouchableOpacity>
            </View> 

            <View style={estilos.acoesContainer}>
                <BotaoPadrao texto="SALVAR"/>
                <TouchableOpacity style={estilos.botaoDelete}>
                    <Icon name="trash" style={{color: "#FFFFFF", fontSize: 18}}/>
                    <Text style={{color: "#FFFFFF", fontSize: 18}}>Apagar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ModificarPesquisa;