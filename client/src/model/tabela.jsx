import React from 'react';
import Table from 'react-bootstrap/Table';

function ResponsiveTable({ itens }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Partida</th>
          <th>Jogador</th>
          <th>Total de Pontos</th>
        </tr>
      </thead>
      <tbody hover="true">
        {itens.map((itens, index) => (
          <tr key={"Linha_" + index}>
            <td key={"partida_" + index}>{itens.pk_partida}</td>
            <td key={"jogador_" + index}>{itens.jogador}</td>
            <td key={"pontos_" + index}>{itens.totalpontos}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ResponsiveTable;
