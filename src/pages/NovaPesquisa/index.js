import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Input from "../../components/Input";
import Icon from "react-native-vector-icons/FontAwesome";
import estilos from "./estilos";
import BotaoPadrao from "../../components/BotaoPadrao";
import MensagemErro from "../../components/MensagemErro";
import MensagemSucesso from "../../components/MensagemSucesso";
import { useContext } from "react";
import { PesquisaContext } from "../../context/PesquisaContext";

function NovaPesquisa() {
    const {
        setNome,
        nome,
        data,
        setData,
        mensagemErroNome,
        mensagemErroData,
        mensagemSucesso,
        mensagemErro,
        cadastrar
    } = useContext(PesquisaContext);

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
            {
                mensagemSucesso !== "" ? <MensagemSucesso texto={mensagemSucesso}/> : null
            }
            {
                mensagemErro !== "" ? <MensagemErro texto={mensagemErro}/> : null
            }

            <BotaoPadrao acao={cadastrar} texto="CADASTRAR"/>
        </View>
    )
}

export default NovaPesquisa;