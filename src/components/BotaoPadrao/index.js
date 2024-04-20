import { Text, TouchableOpacity, View } from "react-native";
import estilos from "./estilos";

function BotaoPadrao({ texto, acao }) {
    return (
        <View style={estilos.container}>
            <TouchableOpacity style={estilos.botao} onPress={acao}>
                <Text style={estilos.texto}>{texto}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BotaoPadrao;