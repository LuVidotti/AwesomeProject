import { Text, View } from "react-native";
import estilos from "./estilos";
import { useEffect } from "react";

function Agradecimento({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.goBack();
        }, 3000)
    }, [])

    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>Obrigado por participar da pesquisa!</Text>
            <Text style={estilos.texto}>Aguardamos você no próximo ano!</Text>
        </View>
    )
}

export default Agradecimento;