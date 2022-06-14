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
          <tr>
            <td key={index}>{itens.pk_partida}</td>
            <td key={index}>{itens.jogador}</td>
            <td key={index}>{itens.totalpontos}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ResponsiveTable;
