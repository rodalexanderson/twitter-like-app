import './App.css';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';


function App() {
  return (
    <div className="App">
      <h1>Bienvenido a Twitter</h1>
      <CreateTweet/>
      <TweetList />
    </div>
  );
}

export default App;
