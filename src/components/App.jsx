import user from '../user.json';
import { Profile } from './Profile';
import { StatisticsList } from './StatisticsList';
import data from '../data.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <StatisticsList items={data} title={'Upload stats'} />
    </div>
  );
};
