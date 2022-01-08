import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";


// Login
export const CreateUser = async (email, password) => {
  try {
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userData.user;
  } catch (error) {
    console.log(error);
  }
};

//Sign-in
export const SignIn = async (email, password) => {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);
    return userData.user;
  } catch (error) {
    console.log(error);
  }
};

//Log-out
export const SignOut = async (email, password) => {
  try {
    const userData = await signOut(auth);
    return userData;
  } catch (error) {
    console.log(error);
  }
};
