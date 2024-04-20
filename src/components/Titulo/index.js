import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import estilos from "./estilos";

function Titulo({ children }) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{children}</Text>
            <Icon name="face-smile" style={{fontSize: 28, color: "#FFFFFF"}}/>
        </View>
    )
}

export default Titulo;