import { CreateUser, SignOut, SignIn } from "../../Services/authentication";
import useInput from "../Hooks/useInput";
import { useState } from "react";


const SignInEmail = ( () => {
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
        <>
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
        </>
    )
}
)

export default SignInEmail