import { useContext } from "react";
import "./App.css";
import { userContext } from "./context/userProvider";
import Home  from "./components/Home";
import SignInGoogle from "./components/SignInGoogle";
// import Registrer from "./components/Registrer";

function App() {
 const user = useContext(userContext)

  return (
    <div className="App">
      {user ? <Home />  : (<SignInGoogle /> ) }
      {/* <Registrer/> */}
    </div>
  );
}

export default App;
