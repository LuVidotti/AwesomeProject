import { TextInput, TouchableOpacity, View } from "react-native";
import Card from "../../components/Card";
import Vector from "../../img/Vector.png"
import Vector2 from "../../img/Vector2.png"
import BotaoPadrao from "../../components/BotaoPadrao";
import estilos from "./estilos";

function Home({ navigation }) {
    return (
        <View style={estilos.container}>
            <TextInput style={estilos.input} placeholderTextColor="#8B8B8B" placeholder="Insira o termo de busca"/>
            <View style={estilos.cards}>
                <TouchableOpacity onPress={() => navigation.navigate("Opcoes", {
                    nome: "SECOMP 2023",
                    data: "10/10/2023",
                    imagem: Vector
                })}>
                    <Card imagem={Vector} texto="SECOMP 2023" data="10/10/2023"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Opcoes", {
                    nome: "UBUNTU 2022",
                    data: "05/06/2022",
                    imagem: Vector2
                })}>
                    <Card imagem={Vector2} texto="UBUNTU 2022" data="05/06/2022"/>
                </TouchableOpacity>
            </View>
            <BotaoPadrao texto="NOVA PESQUISA" acao={() => navigation.navigate("Nova Pesquisa")}/>
        </View>
    )
}

export default Home;