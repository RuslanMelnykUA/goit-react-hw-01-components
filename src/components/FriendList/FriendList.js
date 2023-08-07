import { List, FriendItem, Status, FriendImg } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        const { avatar, name, isOnline } = item;
        return (
          <FriendItem key={item.id}>
            <Status $isOnline={isOnline}></Status>
            <FriendImg src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </FriendItem>
        );
      })}
    </List>
  );
};
