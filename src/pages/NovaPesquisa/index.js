import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Input from "../../components/Input";
import Icon from "react-native-vector-icons/FontAwesome";
import estilos from "./estilos";
import BotaoPadrao from "../../components/BotaoPadrao";
import { useState } from "react";
import MensagemErro from "../../components/MensagemErro";

function NovaPesquisa({ navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [mensagemErroNome, setMensagemErroNome] = useState('');
    const [mensagemErroData, setMensagemErroData] = useState("");

    function cadastrar() {
        if(nome === "" || data === "") {
            setMensagemErroData("Preencha a data");
            setMensagemErroNome("Preencha no nome da pesquisa");
            return
        }

        setMensagemErroData("");
        setMensagemErroNome("");
        navigation.goBack();
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Nome</Text>
                <Input valor={nome} acao={setNome} isPassword={false}/>
                {
                    mensagemErroNome !== "" ? <MensagemErro texto={mensagemErroNome}/> : null
                }
            </View>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Data</Text>
                <View style={estilos.inputData}>
                    <TextInput value={data} onChangeText={setData} style={estilos.input}/>
                    <Icon name="calendar" style={{color: "#939393", backgroundColor: "#FFFFFF", fontSize: 20}}/>
                </View>
                {
                    mensagemErroData !== "" ? <MensagemErro texto={mensagemErroData}/> : null
                }
            </View>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Imagem</Text>
                <TouchableOpacity style={estilos.inputImagem}>
                    <Text style={estilos.inputImagemTexto}>Câmera/Galeria de imagens</Text>
                </TouchableOpacity>
            </View> 

            <BotaoPadrao acao={cadastrar} texto="CADASTRAR"/>
        </View>
    )
}

export default NovaPesquisa;