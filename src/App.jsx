import { useContext } from "react";
import "./App.css";
import CreateTweet from "./components/CreateTweet";
import SignInEmail from "./components/SignInEmail";
import TweetList from "./components/TweetList";
import { userContext } from "./context/userProvider";
import SignInGoogle from "./components/SignInGoogle";
import SignOutGoogle from "./components/SignOutGoogle";
import { SignOut } from "./Services/authentication";


function App() {
 const user = useContext(userContext)

  return (
    <div className="App">
      {user ? (<>
      <SignOutGoogle />
      <h1>Bienvenido a Twitter</h1>
      <CreateTweet />
      <TweetList />
      </>) : (<SignInGoogle /> ) }
      
      
    </div>
  );
}

export default App;
