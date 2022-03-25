import React, { useState } from "react";
import CreateTweet from "../CreateTweet";
import TweetList from "../TweetList";
import Nav from "../Nav";
import ProfileMain from "../Profile/ProfileMain";
import ProfileTweets from "../Profile";

const User = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showPosts, setShowPosts] = useState(true);
  const [showFavorites, setShowFavorites] = useState(false);

  return showProfile ? (
    <>
      <ProfileMain
      setShowProfile={setShowProfile}
      setShowPosts={setShowPosts}
      setShowFavorites={setShowFavorites}
      showFavorites={showFavorites}
      />
      <ProfileTweets
      setShowProfile={setShowProfile}
      setShowPosts={setShowPosts}
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
        setShowPosts={setShowPosts}
        setShowFavorites={setShowFavorites}
      />
    </>
  );
};

export default User;