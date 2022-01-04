import React from "react";
import { setData } from "../../Services/CRUD";
import useInput from "../Hooks/useInput";


const CreateTweet = () => {
    const [tweet, handleTweet] = useInput();
    const [user, handleUser] = useInput();
    const handleCreate = async ()=>{
        await setData("tweets", {user, tweet})
    }
    return (
    <form>
        <input type="text" placeholder="Escribe...." onChange={handleTweet} value={tweet} />
        <input type="text" placeholder="Escribe...." onChange={handleUser} value={user} />
        <button onClick={handleCreate}>Post Tweet</button>
    </form>);
};

export default CreateTweet;