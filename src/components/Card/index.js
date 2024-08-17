import { Image, Text, View } from "react-native";
import estilos from "./estilos";
import { TouchableOpacity } from "react-native-gesture-handler";

function Card({ id, nome, data, navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Opcoes", {
            nome: nome,
            data: data,
            id:id
        })}>
            <View style={estilos.card}>
                {/* <Image style={estilos.imagem} source={item.imagem} alt="Imagem de uma pesquisa"/> */}
                <Text style={estilos.texto}>{nome}</Text>
                <Text style={estilos.data}>{data}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

export default Card;