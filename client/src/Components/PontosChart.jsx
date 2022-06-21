
import React from "react";
import Chart from "react-apexcharts";

function PontosChart({ percentPontos }) {
    return (
        <React.Fragment>
            <h4 className="pieTitle">Percentual de Pontos Dentro/Fora da Quadra</h4>
            <Chart
                type="pie"
                width={425}
                height={600}
                series={[
                    percentPontos.dentro,
                    percentPontos.fora]}
                options={{
                    noData: { text: "Sem dados para mostar" },
                    labels: [
                        'Dentro da Quadra',
                        'Fora da Quadra']
                }}

            >

            </Chart>
        </React.Fragment>
    );
}


export default PontosChart;
