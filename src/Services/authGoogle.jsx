import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getDataById, getDocRef } from "./CRUD";
import { setDoc } from "firebase/firestore";

export const provider = new GoogleAuthProvider();

export const addUser = async (user) => {
    const {uid, displayName, email, photoURL} = user;
    const docRef = getDocRef("users", uid);
    const userExist = await getDataById("users", uid);

    if(!userExist){
        await setDoc(docRef, {
            email: email, 
            name: displayName,
            photo: photoURL,
            uid, 
        });
    }
};

// SE USA POPUP PARA LOGIN
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