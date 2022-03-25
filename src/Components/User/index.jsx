import React, { useState } from "react";
import CreateTweet from "../CreateTweet";
import TweetList from "../TweetList";
import Nav from "../Nav";
// import Profile from "../Profile";
import ProfileFake from "../Routes/Profile";
import Profile from "../Profile";

const User = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showPosts, setShowPosts] = useState(true);
  const [showFavorites, setShowFavorites] = useState(false);

  return showProfile ? (
    <>
      <ProfileFake
      setShowProfile={setShowProfile}
      setShowPosts={setShowPosts}
      setShowFavorites={setShowFavorites}
      showFavorites={showFavorites}
      />
      <Profile
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