import { onSnapshot } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";
import { handleAuthChange } from "../Services/authGoogle";
import { getDocRef } from "../Services/CRUD";

export const userContext = createContext()


export const UserProvider = ({children}) => {
   const [user, setUser] = useState(null);

    //REVISAR ANTES DE ENVIAR//

    const subscribeToUser = (user) => onSnapshot(getDocRef("users", user.uid), (data) => {
        setUser({...user, ...data.data()})
    });


    useEffect(async () => {
        const unsuscribe = await handleAuthChange((user)=>{
        if (user){
            setUser(user)
        } else {
            setUser(null)
        }
    })
    return ()=> unsuscribe()
    }, []);

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
};