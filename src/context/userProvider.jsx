import { createContext, useState, useEffect } from "react";
import { handleAuthChange } from "../Services/authGoogle";

export const userContext = createContext()

const UserProvider = ({children}) => {
   const [user, setUser] = useState(null);

    useEffect(async ()=>{
        const unsuscribe = await handleAuthChange((user)=>{
        if (user){
            setUser(user)
        } else {
            setUser(null)
        }
    })
    return ()=> unsuscribe()
    }, [])

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider