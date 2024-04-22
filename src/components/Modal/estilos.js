import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    caixa: {
        width: 300,
        height: 200,
        backgroundColor: "#2B1F5C",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        marginHorizontal: 30,
        marginVertical: 300
    },
    texto: {
        color: "#FFFFFF",
        fontSize: 16
    },
    botoesContainer: {
        flexDirection: "row",
        gap: 10
    },
    botaoSim: {
        backgroundColor: "#FF8383",
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    botaoCancelar: {
        backgroundColor: "#3F92C5",
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    textoBotao: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16
    }
})

export default estilos;