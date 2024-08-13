import { Text, View } from "react-native";
import estilos from "./estilos";
import Input from "../../components/Input";
import BotaoPadrao from "../../components/BotaoPadrao";
import { useState } from "react";
import MensagemErro from "../../components/MensagemErro";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth_mod } from "../../firebase/config";
import MensagemSucesso from "../../components/MensagemSucesso";

function RecuperacaoSenha({ navigation }) {
    const [email, setEmail] = useState("");
    const [mensagemErro, setMensagemErro] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState("");

    function recuperarSenha() {
        const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(reEmail.test(email)) {
            setMensagemErro('');
            sendPasswordResetEmail(auth_mod, email)
                .then(() => {
                    setMensagemSucesso("E-mail de recuperação de senha enviado com sucesso!!!")
                    setMensagemErro("");
                }).catch((erro) => {
                    console.log(erro);
                    setMensagemSucesso("");
                    setMensagemErro("Erro ao enviar e-mail de redefinição de senha")
                })
        } else {
            setMensagemErro("E-mail parece ser inválido");
        }
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>E-mail</Text>
                <Input valor={email} acao={setEmail} isPassword={false}/>
                {
                    mensagemErro !== "" ? <MensagemErro texto={mensagemErro}/> : null
                }
                {
                    mensagemSucesso !== "" ? <MensagemSucesso texto={mensagemSucesso}/> : null
                }
            </View>

            <View style={{marginTop: 50}}>
                <BotaoPadrao acao={recuperarSenha} texto="RECUPERAR"/>
            </View>
        </View>
    )
}

export default RecuperacaoSenha;