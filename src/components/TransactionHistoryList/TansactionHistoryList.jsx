import PropTypes from 'prop-types';

import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import { Table, TableHead, TableRow } from './TransactionHistoryList.styled';

export const TransactionHistoryList = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TableRow key={transaction.id}>
            <TransactionHistoryItem transaction={transaction} />
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistoryList.propTypes = {
  transactions: PropTypes.array.isRequired,
};
