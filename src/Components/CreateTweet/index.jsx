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

  return (
    <div className="createtweet">
      <textarea
        type="text"
        placeholder="Escribe tu tweet...."
        onChange={handleTweet}
        value={tweet}
        maxlength="200"
      />
      <button onClick={handleCreate}> Crear Tweet</button>
      <div>
          <span className='num'> {tweet.length}</span> / 200 limit
        </div> 
    </div>
  );
};

export default CreateTweet;
