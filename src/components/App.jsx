import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import userData from '../data/user.json';
import statsData from '../data/stats-data.json';
import friendsData from '../data/friends.json';
import transactionData from '../data/transactions.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transData={transactionData} />
      <GlobalStyle />
    </>
  );
};
