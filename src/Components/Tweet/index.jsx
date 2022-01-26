import React from "react";
import { deleteData, updateData } from "../../Services/CRUD";
import {ReactComponent as Solid} from "../../multimedia/SVG/solid.svg"
import {ReactComponent as Empty} from "../../multimedia/SVG/empty.svg"


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
      <p className="tweetText">{tweet}</p>
      <button className="fav" onClick={handleLike}> { likes >= 0 ? <Solid/> : <Empty/> } {likes ? `(${likes})` : ""}</button>
      <button onClick={handleDelete}>Borrar</button>
      <br />
      <br />
      <hr/>
    </div>
  );
};

export default Tweet;
