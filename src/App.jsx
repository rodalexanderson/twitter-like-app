import "./App.css";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import { CreateUser, SignOut, SignIn } from "./Services/Authentication";
import useInput from "./components/Hooks/useInput";
import { useState } from "react";
import { signOut } from "firebase/auth";

function App() {
  const [email, handleEmail] = useInput("");
  const [password, handlePassword] = useInput("");
  const [userState, setUserState] = useState(null);
  const createNewUser = async () => {
    const usuario = await CreateUser(email, password)
    setUserState(usuario)
  }
  const logIn = async () => {
    const usuario = await SignIn(email, password)
    setUserState(usuario)
  }

  const logOut = async () => {
    await SignOut();
    setUserState(null)
  }

  return (
    <div className="App">
        {userState ? (
          <button onClick={()=>logOut()}>Salir</button>
        ) : (<div>
            <input
          type="email"
          placeholder=""
          value={email}
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder=""
          value={password}
          onChange={handlePassword}
        />
        <button onClick={()=>createNewUser()}>
          Crear usuario
        </button>
        <button onClick={()=>logIn()}> Ingresar </button>
        </div>)}
      
      <h1>Bienvenido a Twitter</h1>
      <CreateTweet />
      <TweetList />
    </div>
  );
}

export default App;
