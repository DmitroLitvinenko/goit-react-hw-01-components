import user from '../user.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import data from '../data.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
    </div>
  );
};
