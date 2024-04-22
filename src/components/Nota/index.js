import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6"
import estilos from "./estilos";

function Nota({ icon, texto, cor, tamanho }) {
    return(
        <View style={estilos.container}>
            <Icon name={icon} style={{color: `${cor}`, fontSize: tamanho}} />
            <Text style={estilos.texto}>{texto}</Text>
        </View>
    )
}

export default Nota;