import PropTypes from 'prop-types';

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

FriendList.propTypes = {
  propFriendsArr: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ),
};
