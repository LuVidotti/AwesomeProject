import { Text, View } from "react-native";
import BotaoPadrao from "../../components/BotaoPadrao";
import estilos from "./estilos";
import Input from "../../components/Input";

function CriarConta() {
    return(
        <View style={estilos.container}>
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>E-mail</Text>
                <Input isPassword={false}/>
            </View>
            
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Senha</Text>
                <Input isPassword={true}/>
            </View>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Repetir senha</Text>
                <Input isPassword={true}/>
            </View>

            <BotaoPadrao texto="CADASTRAR"/>
        </View>
    )
}

export default CriarConta;