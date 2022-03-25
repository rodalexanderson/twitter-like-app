import { useContext } from "react";
import "./App.css";
import { userContext } from "./context/userProvider";
import SignInGoogle from "./components/SignInGoogle";
import Register from "./components/Registrer";
import User from "./components/User";


const Main = () => {
  const {color} = useContext(userContext);
  return (color ? <User/> : <Register/>);
};

function App() {
 const user = useContext(userContext);
  return (!user ? <SignInGoogle/> : <Main/>);
};

export default App;
