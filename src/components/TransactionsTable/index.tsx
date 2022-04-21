import { useEffect } from 'react';
import { api } from '../../services/api';
import './style';

import { Container } from './style';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((Response) => console.log(Response.data));
  });

  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <td>Desenvolvimento de website</td>
          <td className="withdraw">-12.000</td>
          <td>Desenvolvimento</td>
          <td>22/10/2000</td>
        </tbody>
        <tbody>
          <td>Desenvolvimento de website</td>
          <td className="deposit">12.000</td>
          <td>Desenvolvimento</td>
          <td>22/10/2000</td>
        </tbody>
      </table>
    </Container>
  );
}
