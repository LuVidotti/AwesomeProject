import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        paddingTop: 100,
        backgroundColor: "#372775",
        flex: 1
    },
    inputArea: {
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 30
    },
    label: {
        color: "#FFFFFF",
        fontSize: 20
    },
    areaBotoes: {
        marginTop: 60,
        alignItems: "center",
        gap: 20
    },
    botaoCriarConta: {
        backgroundColor: "#419ED7",
        padding: 3,
        width: 280,
        alignItems: "center",
    },
    botaoEsqueciSenha: {
        backgroundColor: "#B0CCDE",
        padding: 3,
        width: 280,
        alignItems: "center",
    },
    texto: {
        color: "#FFFFFF",
        fontWeight: "400"
    }
})

export default estilos;