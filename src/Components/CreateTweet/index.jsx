import React, { useContext } from "react";
import { userContext } from "../../context/userProvider";
import { setData } from "../../Services/CRUD";
import useInput from "../../Hooks/useInput";

const CreateTweet = () => {
  const { email } = useContext(userContext);
  const [tweet, handleTweet] = useInput();

  const handleCreate = async () => {
    await setData("tweets", { user: email, tweet });
  };

  const valueTweet = Math.round(tweet.length)

  return (
    <div className="createtweet">
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
          {/* <span>{(valueTweet/200) * 100}%</span> */}
        </div>
      </div>
      <button onClick={handleCreate}> Crear Tweet</button>
      <div>
          <span> {tweet.length}</span> / 200 limit
        </div> 
    </div>
  );
};

export default CreateTweet;
