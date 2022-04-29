import iconeEntradas from '../../assets/income.svg';
import iconeSaidas from '../../assets/outcome.svg';
import iconeTotal from '../../assets/total.svg';
import {useTransactions} from '../../hooks/useTransactions';

import {Container} from './style';

export function Summary() {
  const {transactions} = useTransactions();

  const Summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconeEntradas} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={iconeSaidas} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Summary.withdraws)}
        </strong>
      </div>
      <div className="highLight-background">
        <header>
          <p>Total</p>
          <img src={iconeTotal} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Summary.total)}
        </strong>
      </div>
    </Container>
  );
}
