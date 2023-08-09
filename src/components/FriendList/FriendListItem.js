import { FriendStatus } from './FriendList.styled';
import { FriendName } from './FriendList.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendStatus>{isOnline}</FriendStatus>
      <img src={avatar} alt="User avatar" width="48"></img>
      <FriendName>{name}</FriendName>
    </>
  );
};
