import PropTypes from 'prop-types';
export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span>{isOnline ? 'Online' : 'Offline'}</span>
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
  })
}
