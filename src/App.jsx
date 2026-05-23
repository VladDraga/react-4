import data from './data.json';
import friends from './friends.json'
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';

function App() {
  return (
    <>
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends}/>
    </>
  );
}
export default App;
