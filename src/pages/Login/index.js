import { Text, TouchableOpacity, View } from "react-native";
import Titulo from "../../components/Titulo";
import Input from "../../components/Input";
import estilos from "./estilos";
import BotaoPadrao from "../../components/BotaoPadrao";

function Login({ navigation }) {
    return (
        <View style={estilos.container}>
            <Titulo>Satisfying.you</Titulo>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>E-mail</Text>
                <Input isPassword={false}/>
            </View>
            
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Senha</Text>
                <Input isPassword={true}/>
            </View>

            <BotaoPadrao acao={() => navigation.navigate("DrawerNavigator")} texto="Entrar"/>

            <View style={estilos.areaBotoes}>
                <TouchableOpacity onPress={() => navigation.navigate("Nova Conta")} style={estilos.botaoCriarConta}>
                    <Text style={estilos.texto}>
                        Criar minha conta
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Recuperação de Senha")} style={estilos.botaoEsqueciSenha}>
                    <Text style={estilos.texto}>
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;