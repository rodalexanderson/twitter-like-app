import React, { useContext } from "react";
import { userContext } from "../../../context/userProvider";

 const UserProfile = ({
  showPosts,
  setShowPosts,
  showFavorites,
  setShowFavorites,
}) => {
  const { photoURL, nameUser, color } = useContext(userContext);

  const handleSetShowPosts = () => {
    setShowPosts(true);
    setShowFavorites(false);
  };

  const handleSetShowFavorites = () => {
    setShowFavorites(true);
    setShowPosts(false);
  };

  return (
    <div className="user-profile-container">
      <img
        src={photoURL}
        className="photo-user"
        alt="profile image"
        style={{ borderColor: `${color}` }}
      />
      <div className="name-user" style={{ background: `${color}` }}>
        {nameUser.toUpperCase()}
      </div>
      <div className="sections-container">
        <div
          onClick={handleSetShowPosts}
          className={`section ${!showPosts && "active"}`}
        >
          Post
        </div>
        <div
          onClick={handleSetShowFavorites}
          className={`section ${!showFavorites && "active"}`}
        >
          Favorites
        </div>
      </div>
    </div>
  );
};

export default UserProfile;