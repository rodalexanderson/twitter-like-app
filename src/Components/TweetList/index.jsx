import React from "react";
import Tweet from "../Tweet";
import useTweet from "../Hooks/useTweets";

const TweetList = () => {
   const tweets = useTweet()

    return <div>
        {tweets.map((tweet) => <Tweet {...tweet} key={tweet.id} />)}
    </div>
};

export default TweetList;