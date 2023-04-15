import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
  id: PropTypes.string,
};
