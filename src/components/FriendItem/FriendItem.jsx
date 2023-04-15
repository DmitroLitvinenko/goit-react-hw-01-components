import PropTypes from 'prop-types';
import { ImCross, ImCheckmark } from 'react-icons/im';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span>{isOnline ? <ImCheckmark /> : <ImCross />}</span>
      <img src={avatar} alt={name} width={48} />
      <p>{name}</p>
    </>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
