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

export const ListItem = styled.li`
  display: flex;
  text-align: center;
  background: white;
  align-items: 'center';
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
`;

export const FriendName = styled.p``;
export const FriendImg = styled.img``;

export const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.children ? 'green' : 'red')};
`;
