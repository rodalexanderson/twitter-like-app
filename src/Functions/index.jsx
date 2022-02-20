import React from "react"
import { arrayRemove } from "firebase/firestore";
import { updateData } from "../Services/CRUD";
import { deleteData } from "../Services/CRUD";


export const handleLike = async ({tweet}, uid) => {
    const {userLikes, likes, id} = tweet;
    const updateUserLikes = [...userLikes, uid];
    const updateLikes = likes;

    if (userLikes.includes(uid)) {
        await updateData("tweets", id, {
            userLikes: arrayRemove(uid),
            likes: updateLikes -1,
        });
    } else {
        await updateData("tweets", id, {
            userLikes: updateUserLikes,
            likes: updateLikes +1,
        });
    }
};

export const handleDelete = async (id) => {
    await deleteData("tweets", id);
  };