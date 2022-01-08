import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

export const provider = new GoogleAuthProvider();

export const signInGoogle = async ()=> {
    try{
        const userCredentials = await signInWithPopup(auth, provider);
        return userCredentials.user
    } catch(err){
        console.log(err.message);
    }
}

export const signOutGoogle = async () => {
    signOut(auth);
}

export const handleAuthChange = async (callback) => {
    const unSuscribe = await onAuthStateChanged(auth, callback)
    return unSuscribe
}