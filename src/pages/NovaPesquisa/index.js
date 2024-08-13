import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Input from "../../components/Input";
import Icon from "react-native-vector-icons/FontAwesome";
import estilos from "./estilos";
import BotaoPadrao from "../../components/BotaoPadrao";
import { useState } from "react";
import MensagemErro from "../../components/MensagemErro";
import { collection, initializeFirestore, addDoc } from "firebase/firestore";
import { app } from "../../firebase/config";
import MensagemSucesso from "../../components/MensagemSucesso";

function NovaPesquisa({ navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [mensagemErroNome, setMensagemErroNome] = useState('');
    const [mensagemErroData, setMensagemErroData] = useState("");
    const [mensagemSucesso, setMensagemSucesso] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    const db = initializeFirestore(app, {experimentalForceLongPolling: true});

    const pesquisaCollection = collection(db, "pesquisas");

    function cadastrar() {
        if(nome === "" || data === "") {
            setMensagemErroData("Preencha a data");
            setMensagemErroNome("Preencha no nome da pesquisa");
            return
        }

        const docPesquisa = {
            nome: nome,
            data: data
        }

        addDoc(pesquisaCollection, docPesquisa).then((pesquisaCriada) => {
            setMensagemErroData("");
            setMensagemErroNome("");
            console.log(pesquisaCriada);
            setMensagemSucesso("Pesquisa adicionada com sucesso!!!");
        }).catch((erro) => {
            setMensagemSucesso("");
            setMensagemErro("Erro ao adicionar pesquisa");
        })
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Nome</Text>
                <Input valor={nome} acao={setNome} isPassword={false}/>
                {
                    mensagemErroNome !== "" ? <MensagemErro texto={mensagemErroNome}/> : null
                }
            </View>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Data</Text>
                <View style={estilos.inputData}>
                    <TextInput value={data} onChangeText={setData} style={estilos.input}/>
                    <Icon name="calendar" style={{color: "#939393", backgroundColor: "#FFFFFF", fontSize: 20}}/>
                </View>
                {
                    mensagemErroData !== "" ? <MensagemErro texto={mensagemErroData}/> : null
                }
            </View>

            <View style={estilos.inputArea}>
                <Text style={estilos.label}>Imagem</Text>
                <TouchableOpacity style={estilos.inputImagem}>
                    <Text style={estilos.inputImagemTexto}>Câmera/Galeria de imagens</Text>
                </TouchableOpacity>
            </View> 
            {
                mensagemSucesso !== "" ? <MensagemSucesso texto={mensagemSucesso}/> : null
            }
            {
                mensagemErro !== "" ? <MensagemErro texto={mensagemErro}/> : null
            }

            <BotaoPadrao acao={cadastrar} texto="CADASTRAR"/>
        </View>
    )
}

export default NovaPesquisa;