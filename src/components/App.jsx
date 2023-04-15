import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile/Profile';
import { StatisticsList } from './Statistics/StatisticsList';

import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistoryList } from './Transaction/TansactionHistoryList';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <StatisticsList items={data} title={'Upload stats'} />
      <FriendsList friends={friends} />
      <TransactionHistoryList transactions={transactions} />
    </div>
  );
};
