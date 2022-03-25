import { useEffect, useState, useContext } from "react";
import { userContext } from "../../../context/userProvider";
import { onSnapshot } from "firebase/firestore";
import { getCollectionRef } from "../../../Services/CRUD";
import Solid from "../../../multimedia/SVG/solid.svg"
import Empty from "../../../multimedia/SVG/empty.svg"
import Bin from "../../../multimedia/SVG/bin.svg"
import { handleDelete } from "../../../Functions";
import { handleLike } from "../../../Functions";

const UserPosts = ({
  setShowProfile,
  setShowPosts,
  setShowFavorites,
}) => {
  const [listaTweets, setListaTweets] = useState([]);
  const { uid } = useContext(userContext);

  useEffect(() => {
    const unSuscribe = onSnapshot(getCollectionRef("tweets"), (data) => {
      setListaTweets(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
    return () => {
      unSuscribe();
    };
  }, []);
  const handleInProfile = () => {
    setShowProfile(true);
    setShowPosts(true);
    setShowFavorites(false);
  };

  return (
    <div className="container-tweet-list">
      {listaTweets.map((tweet) => {
        return (
          uid === tweet.uid && (
            <div className="tweet-container" key={tweet.id}>
              <div
                onClick={uid === tweet.uid ? handleInProfile : null}
                className="image-profile"
              >
                <img
                  src={tweet.photo}
                  className="photo-profile"
                  alt="profile image"
                />
              </div>
              <div className="post-info">
                <div className="user-name-date">
                  <div className="flex-row">
                    <div
                      className="user-name"
                      style={{ backgroundColor: tweet.color }}
                    >
                      {tweet.nameUser}
                    </div>
                    <p className="date">- {tweet.dateCreation}</p>
                  </div>
                  {uid === tweet.uid && (
                    <button
                      className="trush-svg"
                      title="Borrar tweet"
                      onClick={() => handleDelete(tweet.id)}
                    >
                      <Bin />
                    </button>
                  )}
                </div>
                <div className="tweet-post">
                  <p>{tweet.tweet}</p>
                </div>
                <div className="likes-container">
                  <button
                    className="like-svg"
                    onClick={() => {
                      handleLike({ tweet }, uid);
                    }}
                  >
                    {tweet.userLikes.includes(uid) ? (
                      <Solid className="like" />
                    ) : (
                      <Empty className="unlike" />
                    )}
                  </button>
                  <p
                    className={tweet.userLikes.includes(uid) ? "favorite" : ""}
                  >
                    {tweet.likes}
                  </p>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default UserPosts;