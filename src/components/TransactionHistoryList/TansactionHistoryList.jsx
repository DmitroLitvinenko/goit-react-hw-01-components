import PropTypes from 'prop-types';

import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';

export const TransactionHistoryList = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <TransactionHistoryItem transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistoryList.propTypes = {
  transactions: PropTypes.array.isRequired,
};
