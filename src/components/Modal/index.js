import { Modal, Text, TouchableOpacity, View } from "react-native";
import estilos from "./estilos";

function ModalComponent({ mostrarModal, fecharModal }) {
    return (
        <Modal
            animationType="slide"
            visible={mostrarModal}
            transparent={true}
        >
            <View style={estilos.caixa}>
                <Text style={estilos.texto}>Tem certeza de apagar essa pesquisa?</Text>
                <View style={estilos.botoesContainer}>
                    <TouchableOpacity onPress={fecharModal} style={estilos.botaoSim}><Text style={estilos.textoBotao}>Sim</Text></TouchableOpacity>
                    <TouchableOpacity onPress={fecharModal} style={estilos.botaoCancelar}><Text style={estilos.textoBotao}>Cancelar</Text></TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ModalComponent;