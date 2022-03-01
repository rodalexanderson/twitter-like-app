import React from "react";
import TweetsProfile from "./TweetsProfile";
import UserProfile from "./UserProfile";
import NavProfile from "./NavProfile";

const Profile = ({
  setShowProfile,
  showPosts,
  setShowPosts,
  showFavorites,
  setShowFavorites,
}) => {
  return (
    <div className="profile-container">
      <NavProfile setShowProfile={setShowProfile} />
      <UserProfile
        showPosts={showPosts}
        setShowPosts={setShowPosts}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />
      <TweetsProfile
        showPosts={showPosts}
        showFavorites={showFavorites}
        setShowProfile={setShowProfile}
        setShowPosts={setShowPosts}
        setShowFavorites={setShowFavorites}
      />
    </div>
  );
};

export default Profile;