import React from "react";
import CreateTweet from "../CreateTweet";
import TweetList from "../TweetList";
import SignOutGoogle from "../SignOutGoogle";

 const Home = () => {
    return (
      <>
        <SignOutGoogle />
        <h1>Bienvenido a Twitter</h1>
        <CreateTweet />
        <TweetList />
      </>

    )

}

export default Home;