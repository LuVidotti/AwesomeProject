import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import Card from "../../components/Card";
import BotaoPadrao from "../../components/BotaoPadrao";
import estilos from "./estilos";
import { useContext } from "react";
import { PesquisaContext } from "../../context/PesquisaContext";

function Home({ navigation }) {
    const { listaPesquisas } = useContext(PesquisaContext);

    return (
        <ScrollView style={estilos.container}>
            <TextInput style={estilos.input} placeholderTextColor="#8B8B8B" placeholder="Insira o termo de busca"/>
            <View style={estilos.cards}>
                {
                    listaPesquisas.map(pesquisa => <Card navigation={navigation} id={pesquisa.id} nome={pesquisa.nome} data={pesquisa.data} key={pesquisa.id}/>)
                }
            </View>
            <BotaoPadrao texto="NOVA PESQUISA" acao={() => navigation.navigate("Nova Pesquisa")}/>
        </ScrollView>
    )
}

export default Home;