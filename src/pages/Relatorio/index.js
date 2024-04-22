import { Image, View } from "react-native";
import estilos from "./estilos";
import Grafico from "../../img/pie-chart 1.png"
import LegendaGrafico from "../../components/LegendaGrafico";

function Relatorio() {
    return (
        <View style={estilos.container}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginVertical: 200}}>
                <Image style={estilos.imagem} source={Grafico} alt="Grafico pizza"/>
                <View style={estilos.legendas}>
                    <LegendaGrafico cor="#F1CE7E" texto="Excelente"/>
                    <LegendaGrafico cor="#6994FE" texto="Bom"/>
                    <LegendaGrafico cor="#5FCDA4" texto="Neutro"/>
                    <LegendaGrafico cor="#EA7288" texto="Ruim"/>
                    <LegendaGrafico cor="#53D8D8" texto="Péssimo"/>
                </View>
            </View>
        </View>
    )
}

export default Relatorio;