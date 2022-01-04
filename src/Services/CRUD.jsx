import { db } from './firebase';
import {collection, doc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot} from "firebase/firestore"

// Funcion helper
const getDocRef = (col, id) => doc(db, col, id)
const getCollectionRef = (col) => collection(db, col )

// Get data
export const getData = async (col) =>{
    const collectionRef = getCollectionRef(col)
    const snapData = await getDocs(collectionRef)
    const data = snapData.map(doc => doc.data())
    return data
}

// Set data
export const setData = async (col, data) =>{
    const collectionRef = getCollectionRef(col)
    // Se crea un nuevo docuento que se llena con collectionRef y data. Como es promesa, se espera con await
    const docRef = await addDoc(collectionRef, data)
    return docRef
}

// Update data
export const updateData = async (col, id, data) =>{
    const docRef = getDocRef(col, id);
    await updateDoc(docRef, data)
}

// Delete data 
export const deleteData = async (col, id) =>{
    const docRef = getDocRef(col, id);
    await deleteDoc(docRef);
}

// Suscribe data
export const getSuscription = async (col, callback) =>{
    const collectionRef = getCollectionRef(col)
    const unsuscribe = onSnapshot(collectionRef, callback);
    return unsuscribe
}