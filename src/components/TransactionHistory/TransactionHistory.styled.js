import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 800px;
  border-collapse: collapse;
  margin: 30px 20px;
`;

export const HeaderTr = styled.tr`
  background-color: lightgreen;
`;

export const TransactionTr = styled.tr`
  background-color: ${props => (props.$even ? '#ffffff' : '#f0f0f0')};
`;

export const TransitionTd = styled.td`
  width: 33%;
  padding: 8px;
  border: 1px solid #e0e0e0;
  text-align: center;
`;
