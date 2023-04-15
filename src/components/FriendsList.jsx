import { FriendItem } from './FriendItem';

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
