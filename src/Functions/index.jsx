import swal from "sweetalert";
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

export const handleDelete = (id) => {
    swal({
        title: "Want to delete this tweet?",
        text: "We won't be able to recover your tweet",
        icon: "warning",
        buttons: true,
        dangerMode: true, 
    }).then((willDelete) => {
        if (willDelete) {
            swal("Done! Tweet has been deleted");
            deleteData("tweets", id);
        }
    });
  };