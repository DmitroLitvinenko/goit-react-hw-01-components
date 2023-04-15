export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span>{isOnline ? 'Online' : 'Offline'}</span>
      <img src={avatar} alt={name} width={48} />
      <p>{name}</p>
    </>
  );
};
