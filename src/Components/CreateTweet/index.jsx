import React, { useContext } from "react";
import { userContext } from "../../context/userProvider";
import { setData } from "../../Services/CRUD";
import useInput from "../../Hooks/useInput";
import profile from "../../multimedia/png/ornacia.jpg"

const CreateTweet = () => {
  const { email } = useContext(userContext);
  const [tweet, handleTweet] = useInput();

  const handleCreate = async () => {
    await setData("tweets", { user: email, tweet });
  };

  return (
    <div className="createtweet">
      <img src={profile} alt="profile pic" width={80} className="profileheader"/>
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
            {/* <span>{(valueTweet/200) * 100}%</span> */}
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
