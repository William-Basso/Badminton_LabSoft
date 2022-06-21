
import React from "react";
import Chart from "react-apexcharts";

function JogadasChart({ titulo, area }) {
    let v1 = (100 * area.saque) / area.pontoinvalido
    let v2 = (100 * area.forehand) / area.pontoinvalido
    let v3 = (100 * area.backhand) / area.pontoinvalido
    let v4 = (100 * area.clear) / area.pontoinvalido
    let v5 = (100 * area.drop_) / area.pontoinvalido
    let v6 = (100 * area.smash) / area.pontoinvalido
    let v7 = (100 * area.drive) / area.pontoinvalido
    let v8 = (100 * area.lob) / area.pontoinvalido
    let v9 = (100 * area.netshot) / area.pontoinvalido
    let v10 = (100 * area.netkill) / area.pontoinvalido
    let v11 = (100 * area.netlift) / area.pontoinvalido
    return (
        <React.Fragment>
            <h4 className="pieTitle">{titulo}</h4>
            <Chart
                type="pie"
                width={365}
                height={300}
                series={[
                    v1,
                    v2,
                    v3,
                    v4,
                    v5,
                    v6,
                    v7,
                    v8,
                    v9,
                    v10,
                    v11]}
                options={{
                    // title: { text: "Percentual de Pontos por Área" },
                    noData: { text: "Sem dados para mostar" },
                    labels: [
                        'Saque',
                        'Forehand',
                        'Backhand',
                        'Clear',
                        'Drop',
                        'Smash',
                        'Drive',
                        'Lob',
                        'Net Shot',
                        'Net Kill',
                        'Net Lift']
                }}

            >

            </Chart>
        </React.Fragment>
    );
}


export default JogadasChart;
