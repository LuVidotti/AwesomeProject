import { Text } from "react-native";
import estilos from "./estilos";

function MensagemErro({ texto }) {
    return(
        <Text style={estilos.mensagem}>{texto}</Text>
    )
}

export default MensagemErro;