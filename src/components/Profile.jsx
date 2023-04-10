import PropTypes from 'prop-types';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => (
  <div>
    <div>
      <img src={avatar} alt={username} width={120} />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
      <ul>
        <li>{followers}</li>
        <li>{views}</li>
        <li>{likes}</li>
      </ul>
    </div>
  </div>
);

Profile.propTypes = {};
