import React, { useState } from "react";
import CreateTweet from "../CreateTweet";
import TweetList from "../TweetList";
import Nav from "../Nav";
import Profile from "../Profile";
// import { Profile } from "./Profile/index";

const User = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showPosts, setShowPosts] = useState(true);
  const [showFavorites, setShowFavorites] = useState(false);

  return showProfile ? (
    <Profile
      showProfile={showProfile}
      setShowProfile={setShowProfile}
      showPosts={showPosts}
      setShowPosts={setShowPosts}
      showFavorites={showFavorites}
      setShowFavorites={setShowFavorites}
    />
  ) : (
    <>
      <Nav showProfile={showProfile} setShowProfile={setShowProfile} />
      <CreateTweet />
      <TweetList
        setShowProfile={setShowProfile}
        setShowPosts={setShowPosts}
        setShowFavorites={setShowFavorites}
      />
    </>
  );
};

export default User;