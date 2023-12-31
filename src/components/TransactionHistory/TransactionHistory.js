import PropTypes from 'prop-types';

import {
  TransactionTable,
  TransactionTr,
  TransitionTd,
  HeaderTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transData }) => {
  return (
    <TransactionTable>
      <thead>
        <HeaderTr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </HeaderTr>
      </thead>

      <tbody>
        {transData.map((item, index) => {
          const { id, type, amount, currency } = item;
          return (
            <TransactionTr key={id} $even={index % 2 === 0}>
              <TransitionTd>{type}</TransitionTd>
              <TransitionTd>{amount}</TransitionTd>
              <TransitionTd>{currency}</TransitionTd>
            </TransactionTr>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};