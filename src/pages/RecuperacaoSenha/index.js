import { Text, View } from "react-native";
import estilos from "./estilos";
import Input from "../../components/Input";
import BotaoPadrao from "../../components/BotaoPadrao";
import { useState } from "react";
import MensagemErro from "../../components/MensagemErro";

function RecuperacaoSenha({ navigation }) {
    const [email, setEmail] = useState("");
    const [mensagemErro, setMensagemErro] = useState('');

    function recuperarSenha() {
        const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(reEmail.test(email)) {
            setMensagemErro('');
            navigation.navigate("Login");
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
            </View>

            <View style={{marginTop: 50}}>
                <BotaoPadrao acao={recuperarSenha} texto="RECUPERAR"/>
            </View>
        </View>
    )
}

export default RecuperacaoSenha;