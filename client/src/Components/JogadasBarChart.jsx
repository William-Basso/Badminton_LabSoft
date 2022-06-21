
import React from "react";
import Chart from "react-apexcharts";

function JogadasBarChart({ titulo, area }) {
    return (
        <React.Fragment>
            <h4 className="pieTitle">{titulo}</h4>
            <Chart
                type="bar"
                width={400}
                height={280}
                series={[
                    {
                        name: "Jogadas",
                        data: [
                            area.saque,
                            area.forehand,
                            area.backhand,
                            area.clear,
                            area.drop_,
                            area.smash,
                            area.drive,
                            area.lob,
                            area.netshot,
                            area.netkill,
                            area.netlift]
                    }
                ]}
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
        </React.Fragment >
    );
}


export default JogadasBarChart;
