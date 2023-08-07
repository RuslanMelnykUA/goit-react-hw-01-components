import styled from 'styled-components';

export const List = styled.ul`
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  margin: 20px;
  border: 1px solid lightblue;
  border-radius: 10px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: 'center';
  flex-direction: column;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

export const FriendImg = styled.img``;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;
