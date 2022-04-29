import {useContext} from 'react';
import iconeEntradas from '../../assets/income.svg';
import iconeSaidas from '../../assets/outcome.svg';
import iconeTotal from '../../assets/total.svg';
import {TransactionsContext} from '../../TransactionContext';

import {Container} from './style';

export function Summary() {
  const {transactions} = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconeEntradas} alt="Entradas" />
        </header>
        <strong>R$1888,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={iconeSaidas} alt="Saídas" />
        </header>
        <strong>R$1888,00</strong>
      </div>
      <div className="highLight-background">
        <header>
          <p>Total</p>
          <img src={iconeTotal} alt="Total" />
        </header>
        <strong>R$1888,00</strong>
      </div>
    </Container>
  );
}
