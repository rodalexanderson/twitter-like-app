import { useState, useEffect } from "react";
import { getSuscription } from "../../Services/CRUD";

const useTweet = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(async () => {
    const unsuscribe = await getSuscription("tweets", (snapData) => {
      const tweetData = snapData.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setTweets(tweetData);
    });
    return () => unsuscribe();
  }, []);
  return tweets;
};

export default useTweet;
