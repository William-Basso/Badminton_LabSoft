
import React from "react";
import Chart from "react-apexcharts";

function AreasChart({ percentAreas }) {
    return (
        <React.Fragment>
            <h4 className="pieTitle">Percentual de Pontos por Área</h4>
            <Chart
                type="pie"
                width={365}
                height={300}
                series={[
                    percentAreas.a1,
                    percentAreas.a2,
                    percentAreas.a3,
                    percentAreas.a4,
                    percentAreas.a5,
                    percentAreas.a6]}
                options={{
                    // title: { text: "Percentual de Pontos por Área" },
                    noData: { text: "Sem dados para mostar" },
                    labels: [
                        'Área 1',
                        'Área 2',
                        'Área 3',
                        'Área 4',
                        'Área 5',
                        'Área 6']
                }}

            >

            </Chart>
        </React.Fragment>
    );
}


export default AreasChart;
