import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Input from "../../components/Input";
import Icon from "react-native-vector-icons/FontAwesome";
import estilos from "./estilos";
import BotaoPadrao from "../../components/BotaoPadrao";

function NovaPesquisa() {
    return (
        <View style={estilos.container}>
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Nome</Text>
                <Input isPassword={false}/>
            </View>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Data</Text>
                <View style={estilos.inputData}>
                    <TextInput style={estilos.input}/>
                    <Icon name="calendar" style={{color: "#939393", backgroundColor: "#FFFFFF", fontSize: 20}}/>
                </View>
            </View>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Imagem</Text>
                <TouchableOpacity style={estilos.inputImagem}>
                    <Text style={estilos.inputImagemTexto}>Câmera/Galeria de imagens</Text>
                </TouchableOpacity>
            </View> 

            <BotaoPadrao texto="CADASTRAR"/>
        </View>
    )
}

export default NovaPesquisa;