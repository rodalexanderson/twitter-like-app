import React, { useContext } from "react";
import { userContext } from "../../context/userProvider";
import { setData } from "../../Services/CRUD";
import useInput from "../../Hooks/useInput";

const CreateTweet = () => {
  const { displayName, uid, color, nameUser, photoUrl } = useContext(userContext);
  const [tweet, handleTweet, deleteTweet] = useInput();
  const dateTweet = new Date().toLocaleDateString();

  const handleCreate = async () => {
    await setData("tweets", { 
      tweet,
      name: displayName,
      nameUser,  
      uid, 
      userLikes: [],
      likes: 0,
      dateTweet,
      color,
      photo: photoUrl,
    });
    deleteTweet();
  };

  return (
    <div className="createtweet">
      <img src={photoUrl} alt="profile pic" width={80} className="profileheader"/>
      <div className="alltext">
        <div className="textarea">
          <textarea
            type="text"
            placeholder="Escribe tu tweet...."
            onChange={handleTweet}
            value={tweet}
            maxlength="200"
          />
          <div>
            <progress value={tweet.length} max={200}/>
            <span> {tweet.length}</span> / 200 limit
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
