import { Image, Text, View } from "react-native";
import estilos from "./estilos";

function Card({ imagem, texto, data }) {
    return (
        <View style={estilos.card}>
            <Image style={estilos.imagem} source={imagem} alt="Imagem de uma pesquisa"/>
            <Text style={estilos.texto}>{texto}</Text>
            <Text style={estilos.data}>{data}</Text>
        </View>
    )
}

export default Card;