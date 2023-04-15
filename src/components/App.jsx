import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile/Profile';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { GlobalStyle } from './GlobalStyle';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistoryList } from './TransactionHistoryList/TansactionHistoryList';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <StatisticsList items={data} title={'Upload stats'} />
      <FriendsList friends={friends} />
      <TransactionHistoryList transactions={transactions} />
      <GlobalStyle />
    </div>
  );
};
