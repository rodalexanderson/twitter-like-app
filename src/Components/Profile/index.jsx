import React from "react";
// import TweetsProfile from "./TweetsProfile";
// import UserProfile from "./UserProfile";
// import NavProfile from "./NavProfile";
import ProfileFavourites from "../Routes/ProfileFav";
import ProfilePosts from "../Routes/ProfilePosts"

const Profile = ({
  setShowProfile,
  showPosts,
  setShowPosts,
  showFavorites,
  setShowFavorites,
}) => {
  return showFavorites ? <ProfileFavourites
        showPosts={showPosts}
        setShowPosts={setShowPosts}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
  /> : <ProfilePosts
        showPosts={showPosts}
        setShowPosts={setShowPosts}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
  />
}
export default Profile;