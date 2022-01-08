import { useState, useEffect } from "react";
import { getSubscription } from "../../Services/CRUD";

const useTweet = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(async () => {
    const unsuscribe = await getSubscription("tweets", (snapData) => {
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
