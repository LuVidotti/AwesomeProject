import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    inputArea: {
        marginHorizontal: 40,
        marginTop: 40
    },
    label: {
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "AveriaLibre_400Regular"
    },
    container: {
        flex: 1,
        backgroundColor: "#372775"
    },
    inputData: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: 280
    },
    input: {
        backgroundColor: "#FFFFFF",
        padding: 5,
        width: 250,
        color: "#3F92C5",
        fontFamily: "AveriaLibre_400Regular"
    },
    inputImagem: {
        backgroundColor: "#FFFFFF",
        padding: 30,
        alignItems: "center",
        marginBottom: 40
    },
    inputImagemTexto: {
        color: "#939393"
    },
    acoesContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10
    },
    botaoDelete: {
        alignItems: "center",
        justifyContent: "center"
    }
})

export default estilos;