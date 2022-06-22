
import React from "react";
import Chart from "react-apexcharts";

function JogadasBarChart2({ titulo, a1, a2, a3, a4, a5, a6 }) {
    var saque = a1.saque + a2.saque + a3.saque + a4.saque + a5.saque + a6.saque;
    var forehand = a1.forehand + a2.forehand + a3.forehand + a4.forehand + a5.forehand + a6.forehand;
    var backhand = a1.backhand + a2.backhand + a3.backhand + a4.backhand + a5.backhand + a6.backhand;
    var clear = a1.clear + a2.clear + a3.clear + a4.clear + a5.clear + a6.clear;
    var drop_ = a1.drop_ + a2.drop_ + a3.drop_ + a4.drop_ + a5.drop_ + a6.drop_;
    var smash = a1.smash + a2.smash + a3.smash + a4.smash + a5.smash + a6.smash;
    var drive = a1.drive + a2.drive + a3.drive + a4.drive + a5.drive + a6.drive;
    var lob = a1.lob + a2.lob + a3.lob + a4.lob + a5.lob + a6.lob;
    var netshot = a1.netshot + a2.netshot + a3.netshot + a4.netshot + a5.netshot + a6.netshot;
    var netkill = a1.netkill + a2.netkill + a3.netkill + a4.netkill + a5.netkill + a6.netkill;
    var netlift = a1.netlift + a2.netlift + a3.netlift + a4.netlift + a5.netlift + a6.netlift;
    // var total = saque + forehand + backhand + clear + drop_ + smash + drive + lob + netshot + netkill + netlift;
    return (
        <React.Fragment>
            <h4 className="pieTitle">{titulo}</h4>
            <Chart
                type="bar"
                width={790}
                height={280}
                series={[
                    {
                        name: "Jogadas",
                        data: [
                            saque,
                            forehand,
                            backhand,
                            clear,
                            drop_,
                            smash,
                            drive,
                            lob,
                            netshot,
                            netkill,
                            netlift]
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


export default JogadasBarChart2;
