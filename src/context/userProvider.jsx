import { onSnapshot } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";
import { handleAuthChange } from "../Services/authGoogle";
import { getDocRef } from "../Services/CRUD";

export const userContext = createContext()


export const UserProvider = ({children}) => {
   const [user, setUser] = useState(null);

    //REVISAR ANTES DE ENVIAR//

    const suscribeToUser = (user) => onSnapshot(getDocRef("users", user.uid), (data) => {
        setUser({...user, ...data.data()})
    });


    useEffect(async () => {
        let unsuscribeFromUser;
        const unsuscribe = await handleAuthChange((user)=>{
        if (user){
            unsuscribeFromUser = suscribeToUser(user);
        } else {
            setUser(null);
            if (unsuscribeFromUser) unsuscribeFromUser();
        }
    });
    return ()=> {
        unsuscribe();
        if (unsuscribeFromUser) unsuscribeFromUser();
    };
    }, []);

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
};