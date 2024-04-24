import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#372775"
    },
    cards: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        marginTop: 30,
        marginBottom: 40
    },
    input: {
        backgroundColor: "#FFFFFF",
        padding: 5,
        marginTop: 20,
        marginHorizontal: 10,
        marginBottom: 20,
        fontFamily: "AveriaLibre_400Regular"
    }
})

export default estilos;