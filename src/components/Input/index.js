import { TextInput } from "react-native";
import estilos from "./estilos";

function Input({ acao, isPassword }) {
    return(
        <TextInput style={estilos.input} secureTextEntry={isPassword} onChangeText={acao}/>
    )
}

export default Input