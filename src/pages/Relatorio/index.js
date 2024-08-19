import { Image, View } from "react-native";
import estilos from "./estilos";
import Grafico from "../../img/pie-chart 1.png"
import LegendaGrafico from "../../components/LegendaGrafico";
import { useContext, useEffect, useState } from "react";
import { PesquisaContext } from "../../context/PesquisaContext";

function Relatorio({ route }) {
    const { id } = route.params;
    const { recuperarPesquisa, notaPessimo, notaRuim, notaNeutro, notaBom, notaExcelente } = useContext(PesquisaContext);
    

    useEffect(() => {
        recuperarPesquisa(id);
    }, [id]);

    const data = [
        { name: 'Péssimo', value: notaPessimo, color: '#53D8D8' },
        { name: 'Ruim', value: notaRuim, color: '#EA7288' },
        { name: 'Neutro', value: notaNeutro, color: '#5FCDA4' },
        { name: 'Bom', value: notaBom, color: '#6994FE' },
        { name: 'Excelente', value: notaExcelente, color: '#F1CE7E' },
    ];

    return (
        <View style={estilos.container}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginVertical: 200}}>
                <Image source={Grafico} style={estilos.imagem}/>
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