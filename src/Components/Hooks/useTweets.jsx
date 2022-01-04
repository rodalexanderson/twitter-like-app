import { useState, useEffect } from "react";
import { getSuscription } from "../../Services/CRUD";

const useTweet = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(async ()=> {
            const unsuscribe = await getSuscription("tweets", (snapData) => {
                snapData.docs.map((doc) => setTweets(snapData.docs.map((doc) => {return {...doc.data(), id:doc.id}})));
            })
            return ()=> unsuscribe();
        }, []
    )
    return tweets;
}

export default useTweet;