import {useState} from 'react';
import Modal from 'react-modal';
import {Dashboard} from './components/Dashboard';
import {Header} from './components/Header';
import {NewTransactionModal} from './components/NewTransactionModal';

import {GobalStyle} from './styles/global';
import {TransactionsProvider} from './TransactionContext';

Modal.setAppElement('#root'); //acessibilidade

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false,
  );

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      <GobalStyle />
    </TransactionsProvider>
  );
}
