import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Input from "../../components/Input";
import Icon from "react-native-vector-icons/FontAwesome";
import estilos from "./estilos";
import BotaoPadrao from "../../components/BotaoPadrao";
import { useState } from "react";
import ModalComponent from "../../components/Modal";

function ModificarPesquisa({ route, navigation }) {
    const { nome, data, imagem } = route.params;

    const [mostrarModal, setMostrarModal] = useState(false);
    const [nomeInput, setNomeInput] = useState(nome);
    const [dataInput, setDataInput] = useState(data);

    function abrirModal() {
        setMostrarModal(true);
    }

    function fecharModal() {
        setMostrarModal(false);
    }

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
                <TouchableOpacity style={estilos.botaoDelete} onPress={abrirModal}>
                    <Icon name="trash" style={{color: "#FFFFFF", fontSize: 18}}/>
                    <Text style={{color: "#FFFFFF", fontSize: 18, fontFamily: "AveriaLibre_400Regular"}}>Apagar</Text>
                </TouchableOpacity>
            </View>

            <ModalComponent mostrarModal={mostrarModal} fecharModal={fecharModal}/>
        </View>
    )
}

export default ModificarPesquisa;