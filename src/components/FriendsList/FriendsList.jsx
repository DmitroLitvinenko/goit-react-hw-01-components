import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';
import { Item } from 'components/FriendItem/FriendsItem.styled';
import { List } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <FriendItem friend={friend} />
        </Item>
      ))}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
  id: PropTypes.string,
};
