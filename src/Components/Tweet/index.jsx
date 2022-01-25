import React from "react";
import { deleteData, updateData } from "../../Services/CRUD";


const Tweet = ({ user, tweet, id, likes }) => {
  const handleDelete = async () => {
    await deleteData("tweets", id);
  };

  const handleLike = async () => {
    const likeCounter = likes ? likes + 1 : 1;
    await updateData("tweets", id, { likes: likeCounter });
  };

  return (
    <div className="tweet">
      <h3>{user}</h3>
      <p>{tweet}</p>
      <button onClick={handleLike}>Favorito {likes ? `(${likes})` : ""}</button>
      <button onClick={handleDelete}>Borrar</button>
      <hr/>
    </div>
  );
};

export default Tweet;
