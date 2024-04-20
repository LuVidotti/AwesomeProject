import { TextInput } from "react-native";
import estilos from "./estilos";

function Input({ acao, isPassword, valor }) {
    return(
        <TextInput value={valor} style={estilos.input} secureTextEntry={isPassword} onChangeText={acao}/>
    )
}

export default Input