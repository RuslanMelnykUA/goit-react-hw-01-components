import { FriendListItem } from './FriendListItem';
import { List, ListItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <ListItem key={friend.id} $isOnline={friend.isOnline.toString()}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </ListItem>
      ))}
    </List>
  );
};

// export const FriendsList = ({ friends }) => {
//   return (
//     <List>
//       {friends.map(item => {
//         const { avatar, name, isOnline } = item;
//         return (
//           <FriendItem key={item.id}>
//             <Status $isOnline={isOnline}></Status>
//             <FriendImg src={avatar} alt="User avatar" width="48" />
//             <p>{name}</p>
//           </FriendItem>
//         );
//       })}
//     </List>
//   );
// };