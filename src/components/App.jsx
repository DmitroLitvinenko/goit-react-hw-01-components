import user from '../user.json';
import { Profile } from './Profile';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
