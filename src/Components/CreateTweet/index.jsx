import React from "react";
import { setData } from "../../Services/CRUD";
import useInput from "../Hooks/useInput";

const CreateTweet = () => {
  const [tweet, handleTweet] = useInput();
  const [user, handleUser] = useInput();
  const handleCreate = async () => {
    await setData("tweets", { user, tweet });
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Escribe tu nombre...."
        onChange={handleUser}
        value={user}
      />
      <input
        type="text"
        placeholder="Escribe tu tweet...."
        onChange={handleTweet}
        value={tweet}
      />
      <button onClick={handleCreate}>Post Tweet</button>
    </form>
  );
};

export default CreateTweet;
