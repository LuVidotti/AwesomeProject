import { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import Opcao from "../../components/Opcao";
import Icon from "react-native-vector-icons/Ionicons";
import estilos from "./estilos";

function Opcoes({ route, navigation }) {
    const { nome, data, imagem } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: nome
        })
    }, [])

    return(
        <View style={estilos.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Modificar pesquisa", {
                    nome: nome,
                    data: data,
                    imagem: imagem
                })}
            ><Opcao texto="Modificar"><Icon name="create-outline" style={{fontSize: 35, color: "#FFFFFF"}}/></Opcao></TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Coleta dados", {
                    nome: nome
                })}
            ><Opcao texto="Coletar dados"><Icon name="checkbox-outline" style={{fontSize: 35, color: "#FFFFFF"}}/></Opcao></TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Relatório")}
            ><Opcao texto="Relatório"><Icon name="aperture-outline" style={{fontSize: 35, color: "#FFFFFF"}}/></Opcao></TouchableOpacity>
        </View>
    )
}

export default Opcoes;