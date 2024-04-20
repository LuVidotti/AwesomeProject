import { Text, View } from "react-native";
import estilos from "./estilos";
import Input from "../../components/Input";
import BotaoPadrao from "../../components/BotaoPadrao";

function RecuperacaoSenha() {
    return (
        <View style={estilos.container}>
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>E-mail</Text>
                <Input isPassword={false}/>
            </View>

            <View style={{marginTop: 50}}>
                <BotaoPadrao texto="RECUPERAR"/>
            </View>
        </View>
    )
}

export default RecuperacaoSenha;