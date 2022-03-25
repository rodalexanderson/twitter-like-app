import React from "react";
import ProfileFavourites from "../Profile/ProfileFav";
import ProfilePosts from "../Profile/ProfilePosts"

const ProfileTweets = ({
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
export default ProfileTweets;