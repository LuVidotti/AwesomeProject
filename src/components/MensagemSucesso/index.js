import { Text } from "react-native";
import estilos from "./estilos";

function MensagemSucesso({ texto }) {
    return (
        <Text style={estilos.mensagem}>{texto}</Text>
    )
}

export default MensagemSucesso;