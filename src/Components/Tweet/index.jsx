import React from "react";
import { deleteData, updateData } from "../../Services/CRUD";
import {ReactComponent as Solid} from "../../multimedia/SVG/solid.svg"
import {ReactComponent as Empty} from "../../multimedia/SVG/empty.svg"
import {ReactComponent as Bin} from "../../multimedia/SVG/bin.svg"
import profile from "../../multimedia/png/ornacia.jpg"


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
        <img src={profile} alt="profile pic" width={60} className="profile"/>
      <div className="continfo">
        <div className="tweetheader">
          <div className="tweetheaderleftside">
            <h3 className="username">{user}</h3>
            <p>---date</p>
          </div>
        <button className="bin" onClick={handleDelete}><Bin/></button>
        </div>
        <p className="tweetText">{tweet}</p>
        <button className="fav" onClick={handleLike}> { likes > 0 ? <Solid/> : <Empty/> } {likes ? `(${likes})` : ""}</button>
        <br />
        <br />
        <hr/>
      </div>
    </div>
  );
};

export default Tweet;
