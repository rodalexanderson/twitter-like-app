import React, { useState } from "react";
import CreateTweet from "../CreateTweet";
import TweetList from "../TweetList";
import Nav from "../Nav";
import ProfileMain from "../Profile/ProfileMain";
import ProfileTweets from "../Profile";

const User = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  return showProfile ? (
    <>
      <ProfileMain
      setShowProfile={setShowProfile}
      setShowFavorites={setShowFavorites}
      showFavorites={showFavorites}
      />
      <ProfileTweets
      setShowProfile={setShowProfile}
      setShowFavorites={setShowFavorites}
      showFavorites={showFavorites}
      />
    </>
  ) : (
    <>
      <Nav showProfile={showProfile} setShowProfile={setShowProfile} />
      <CreateTweet />
      <TweetList
        setShowProfile={setShowProfile}
        setShowFavorites={setShowFavorites}
      />
    </>
  );
};

export default User;