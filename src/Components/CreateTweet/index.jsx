import React, { useContext } from "react";
import { userContext } from "../../context/userProvider";
import { setData } from "../../Services/CRUD";
import useInput from "../Hooks/useInput";

const CreateTweet = () => {
  const [tweet, handleTweet] = useInput();
  const {email} = useContext(userContext);

  const handleCreate = async () => {
    await setData("tweets", { user: email, tweet });
  };
  return (
    <form>
      <textarea
        type="text"
        placeholder="Escribe tu tweet...."
        onChange={handleTweet}
        value={tweet}
      />
      <button onClick={handleCreate}> Crear Tweet</button>
    </form>
  );
};

export default CreateTweet;
