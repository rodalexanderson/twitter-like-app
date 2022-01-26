import React from "react";
import CreateTweet from "../CreateTweet";
import TweetList from "../TweetList";
import SignOutGoogle from "../SignOutGoogle";

 const Home = () => {
    return (
      <div className="home">
        <SignOutGoogle />
        <CreateTweet />
        <TweetList />
      </div>

    )

}

export default Home;