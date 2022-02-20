import React from "react";
import { UserPosts } from "../UserProfile/Userposts";
import { UserFavorites } from "../UserProfile/UserFavorites";

 const TweetsProfile = ({
  showPosts,
  showFavorites,
  setShowProfile,
  setShowPosts,
  setShowFavorites,
}) => {
  return (
    <>
      {showFavorites && (
        <UserFavorites
          setShowProfile={setShowProfile}
          setShowPosts={setShowPosts}
          setShowFavorites={setShowFavorites}
        />
      )}
      {showPosts && (
        <UserPosts
          setShowProfile={setShowProfile}
          setShowPosts={setShowPosts}
          setShowFavorites={setShowFavorites}
        />
      )}
    </>
  );
};

export default TweetsProfile;