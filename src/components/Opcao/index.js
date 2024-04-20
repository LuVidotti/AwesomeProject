import { Text, View } from "react-native";
import estilos from "./estilos";

function Opcao({ children, texto }) {
    return (
        <View style={estilos.card}>
            {children}
            <Text style={estilos.texto}>{texto}</Text>
        </View>
    )
}

export default Opcao;