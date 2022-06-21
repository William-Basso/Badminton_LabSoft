import React from 'react';
import Table from 'react-bootstrap/Table';

function AreasTable({ a1, a2, a3, a4, a5, a6, fora }) {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Jogada</th>
          <th>Área 1</th>
          <th>Área 2</th>
          <th>Área 3</th>
          <th>Área 4</th>
          <th>Área 5</th>
          <th>Área 6</th>
          <th>Fora</th>
        </tr>
      </thead>
      <tbody hover="true">
        {/* {itens.map((itens, index) => ( */}
        <tr key={"Linha_1"}>
          <td key={"saque"}>   {"Saque"}</td>
          <td key={"saque_1"}> {a1.saque}</td>
          <td key={"saque_2"}> {a2.saque}</td>
          <td key={"saque_3"}> {a3.saque}</td>
          <td key={"saque_4"}> {a4.saque}</td>
          <td key={"saque_5"}> {a5.saque}</td>
          <td key={"saque_6"}> {a6.saque}</td>
          <td key={"saque_7"}> {fora.saque}</td>
        </tr>
        <tr key={"Linha_2"}>
          <td key={"forehand"}>   {"Forehand"}</td>
          <td key={"forehand_1"}> {a1.forehand}</td>
          <td key={"forehand_2"}> {a2.forehand}</td>
          <td key={"forehand_3"}> {a3.forehand}</td>
          <td key={"forehand_4"}> {a4.forehand}</td>
          <td key={"forehand_5"}> {a5.forehand}</td>
          <td key={"forehand_6"}> {a6.forehand}</td>
          <td key={"forehand_7"}> {fora.forehand}</td>
        </tr>
        <tr key={"Linha_3"}>
          <td key={"backhand"}>   {"Backhand"}</td>
          <td key={"backhand_1"}> {a1.backhand}</td>
          <td key={"backhand_2"}> {a2.backhand}</td>
          <td key={"backhand_3"}> {a3.backhand}</td>
          <td key={"backhand_4"}> {a4.backhand}</td>
          <td key={"backhand_5"}> {a5.backhand}</td>
          <td key={"backhand_6"}> {a6.backhand}</td>
          <td key={"backhand_7"}> {fora.backhand}</td>
        </tr>
        <tr key={"Linha_4"}>
          <td key={"clear"}>   {"Clear"}</td>
          <td key={"clear_1"}> {a1.clear}</td>
          <td key={"clear_2"}> {a2.clear}</td>
          <td key={"clear_3"}> {a3.clear}</td>
          <td key={"clear_4"}> {a4.clear}</td>
          <td key={"clear_5"}> {a5.clear}</td>
          <td key={"clear_6"}> {a6.clear}</td>
          <td key={"clear_7"}> {fora.clear}</td>
        </tr>
        <tr key={"Linha_5"}>
          <td key={"drop"}>   {"Drop"}</td>
          <td key={"drop_1"}> {a1.drop_}</td>
          <td key={"drop_2"}> {a2.drop_}</td>
          <td key={"drop_3"}> {a3.drop_}</td>
          <td key={"drop_4"}> {a4.drop_}</td>
          <td key={"drop_5"}> {a5.drop_}</td>
          <td key={"drop_6"}> {a6.drop_}</td>
          <td key={"drop_7"}> {fora.drop_}</td>
        </tr>
        <tr key={"Linha_6"}>
          <td key={"smash"}>   {"Smash"}</td>
          <td key={"smash_1"}> {a1.smash}</td>
          <td key={"smash_2"}> {a2.smash}</td>
          <td key={"smash_3"}> {a3.smash}</td>
          <td key={"smash_4"}> {a4.smash}</td>
          <td key={"smash_5"}> {a5.smash}</td>
          <td key={"smash_6"}> {a6.smash}</td>
          <td key={"smash_7"}> {fora.smash}</td>
        </tr>
        <tr key={"Linha_7"}>
          <td key={"drive"}>   {"Drive"}</td>
          <td key={"drive_1"}> {a1.drive}</td>
          <td key={"drive_2"}> {a2.drive}</td>
          <td key={"drive_3"}> {a3.drive}</td>
          <td key={"drive_4"}> {a4.drive}</td>
          <td key={"drive_5"}> {a5.drive}</td>
          <td key={"drive_6"}> {a6.drive}</td>
          <td key={"drive_7"}> {fora.drive}</td>
        </tr>
        <tr key={"Linha_8"}>
          <td key={"lob"}>   {"Lob"}</td>
          <td key={"lob_1"}> {a1.lob}</td>
          <td key={"lob_2"}> {a2.lob}</td>
          <td key={"lob_3"}> {a3.lob}</td>
          <td key={"lob_4"}> {a4.lob}</td>
          <td key={"lob_5"}> {a5.lob}</td>
          <td key={"lob_6"}> {a6.lob}</td>
          <td key={"lob_7"}> {fora.lob}</td>
        </tr>
        <tr key={"Linha_9"}>
          <td key={"netshot"}>   {"Net Shot"}</td>
          <td key={"netshot_1"}> {a1.netshot}</td>
          <td key={"netshot_2"}> {a2.netshot}</td>
          <td key={"netshot_3"}> {a3.netshot}</td>
          <td key={"netshot_4"}> {a4.netshot}</td>
          <td key={"netshot_5"}> {a5.netshot}</td>
          <td key={"netshot_6"}> {a6.netshot}</td>
          <td key={"netshot_7"}> {fora.netshot}</td>
        </tr>
        <tr key={"Linha_10"}>
          <td key={"netkill"}>   {"Net Kill"}</td>
          <td key={"netkill_1"}> {a1.netkill}</td>
          <td key={"netkill_2"}> {a2.netkill}</td>
          <td key={"netkill_3"}> {a3.netkill}</td>
          <td key={"netkill_4"}> {a4.netkill}</td>
          <td key={"netkill_5"}> {a5.netkill}</td>
          <td key={"netkill_6"}> {a6.netkill}</td>
          <td key={"netkill_7"}> {fora.netkill}</td>
        </tr>
        <tr key={"Linha_11"}>
          <td key={"netlift"}>   {"Net Lift"}</td>
          <td key={"netlift_1"}> {a1.netlift}</td>
          <td key={"netlift_2"}> {a2.netlift}</td>
          <td key={"netlift_3"}> {a3.netlift}</td>
          <td key={"netlift_4"}> {a4.netlift}</td>
          <td key={"netlift_5"}> {a5.netlift}</td>
          <td key={"netlift_6"}> {a6.netlift}</td>
          <td key={"netlift_7"}> {fora.netlift}</td>
        </tr>
        <tr key={"Linha_12"}>
          <td key={"pontovalido"}>   {"Ponto"}</td>
          <td key={"pontovalido_1"}> {a1.pontovalido}</td>
          <td key={"pontovalido_2"}> {a2.pontovalido}</td>
          <td key={"pontovalido_3"}> {a3.pontovalido}</td>
          <td key={"pontovalido_4"}> {a4.pontovalido}</td>
          <td key={"pontovalido_5"}> {a5.pontovalido}</td>
          <td key={"pontovalido_6"}> {a6.pontovalido}</td>
          <td key={"pontovalido_7"}> {fora.pontoinvalido}</td>
        </tr>
        {/* ))} */}
      </tbody>
    </Table>
  );
}

export default AreasTable;
