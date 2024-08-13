import { Text, TouchableOpacity, View } from "react-native";
import Titulo from "../../components/Titulo";
import Input from "../../components/Input";
import estilos from "./estilos";
import BotaoPadrao from "../../components/BotaoPadrao";
import { useState } from "react";
import MensagemErro from "../../components/MensagemErro";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth_mod } from "../../firebase/config";

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    function entrar() {
        if(email === "" || senha === "") {
            setMensagemErro("E-mail e/ou senha inválidos.")
            return
        }

        const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(reEmail.test(email)) {
            setMensagemErro('');
            signInWithEmailAndPassword(auth_mod, email, senha)
                .then((usuarioLogado) => {
                    console.log(usuarioLogado);
                    navigation.navigate("DrawerNavigator");
                }).catch((erro) => {
                    console.log(erro);
                    setMensagemErro("E-mail e/ou senha incorretos.")
                })
        } else {
            setMensagemErro("E-mail e/ou senha inválidos.");
        }
    }

    return (
        <View style={estilos.container}>
            <Titulo>Satisfying.you</Titulo>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>E-mail</Text>
                <Input valor={email} acao={setEmail} isPassword={false}/>
            </View>
            
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Senha</Text>
                <Input valor={senha} acao={setSenha} isPassword={true}/>
                {
                    mensagemErro !== "" ? <MensagemErro texto={mensagemErro}/> : null
                }
            </View>

            <BotaoPadrao acao={entrar} texto="Entrar"/>

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