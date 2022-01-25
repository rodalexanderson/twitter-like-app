import React from "react";
import CreateTweet from "../CreateTweet";
import TweetList from "../TweetList";
import SignOutGoogle from "../SignOutGoogle";

 const Home = () => {
    return (
      <div className="home">
        <SignOutGoogle />
        <h1>Bienvenido a Twitter</h1>
        <CreateTweet />
        <TweetList />
      </div>

    )

}

export default Home;