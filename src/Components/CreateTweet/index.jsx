import React, { useContext } from "react";
import { userContext } from "../../context/userProvider";
import { addData } from "../../Services/CRUD";
import useInput from "../../Hooks/useInput";

const CreateTweet = () => {
  const { displayName, uid, color, nameUser, photoURL } = useContext(userContext);
  const [tweet, handleTweet, deleteTweet] = useInput();
  const dateTweet = new Date().toLocaleDateString();

  const handleCreate = async () => {
    await addData("tweets", { 
      tweet,
      name: displayName,
      nameUser,  
      uid, 
      userLikes: [],
      likes: 0,
      dateTweet,
      color,
      photo: photoURL,
    });
    deleteTweet();
  };

  return (
    <div className="createtweet">
      <div className="alltext">
        <div className="textarea">
          <textarea
            type="text"
            placeholder="Write your message"
            onChange={handleTweet}
            value={tweet}
            maxLength="200"
            className="createtextarea"
          />
          <div className="progressbar">
            <progress value={tweet.length} max={200}/>
            <div>
              <p> {tweet.length} / 200 limit </p>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className="postbtn">
          {tweet.length === 0 ? <button disabled className="block"> Post </button> : <button onClick={handleCreate} className="ok"> Post</button> }
        </div> 
      </div>
      
    </div>
  );
};

export default CreateTweet;
