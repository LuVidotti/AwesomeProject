import { Text, View } from "react-native";
import BotaoPadrao from "../../components/BotaoPadrao";
import estilos from "./estilos";
import Input from "../../components/Input";
import { useState } from "react";
import MensagemErro from "../../components/MensagemErro";

function CriarConta({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    function cadastrar() {
        if(email === "" || senha === "" || senha2 === "") {
            setMensagemErro("Erro, campos vazios");
            return
        }

        if(senha2 !== senha) {
            setMensagemErro("O campo repetir senha difere da senha");
            return
        }

        const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(reEmail.test(email)) {
            setMensagemErro('');
            navigation.navigate("Login");
        } else {
            setMensagemErro("E-mail inválido");
        }
    }

    return(
        <View style={estilos.container}>
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>E-mail</Text>
                <Input valor={email} acao={setEmail} isPassword={false}/>
            </View>
            
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Senha</Text>
                <Input valor={senha} acao={setSenha} isPassword={true}/>
            </View>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Repetir senha</Text>
                <Input valor={senha2} acao={setSenha2} isPassword={true}/>
                {
                    mensagemErro !== "" ? <MensagemErro texto={mensagemErro}/> : null
                }
            </View>

            <BotaoPadrao acao={cadastrar} texto="CADASTRAR"/>
        </View>
    )
}

export default CriarConta;