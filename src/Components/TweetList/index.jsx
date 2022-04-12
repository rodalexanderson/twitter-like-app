import { useEffect, useState, useContext } from "react";
import { userContext } from "../../context/userProvider";
import { onSnapshot } from "firebase/firestore";
import { getCollectionRef } from "../../Services/CRUD";
import { ReactComponent as Heart } from "../../multimedia/SVG/solid.svg";
import { ReactComponent as Empty } from "../../multimedia/SVG/empty.svg";
import { ReactComponent as Bin } from "../../multimedia/SVG/bin.svg";
import { handleLike } from "../../Functions";
import { handleDelete } from "../../Functions";


const TweetList = ({
  setShowProfile,
  setShowFavorites,
}) => {
  const [listaTweets, setListaTweets] = useState([]);
  const { uid } = useContext(userContext);
  // const dateTweet = new Date().toLocaleDateString();

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
    setShowFavorites(false);
  };

  return (
    <div className="container-tweet-list">
      {listaTweets.map((tweet) => {
        // console.log({tweet})
        return (
          <div className="tweet-container" key={tweet.id}>
            <div
              onClick={uid === tweet.uid ? handleInProfile : null}
              className={`${uid === tweet.uid && "cursor"} image-profile`}
            >
              <img
                src={tweet.photo}
                className="photo-profile"
                alt="profile"
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
                  <p className="date">- {tweet.dateTweet}</p>
                </div>
                {uid === tweet.uid && (
                  <button
                    className="trush-svg"
                    title="Borrar tweet"
                    onClick={() => handleDelete(tweet.id)}
                    // onClick={() => handleDelete(tweet.id)}
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
                  {tweet.userLikes != 0 ? (
                    <Heart className="like" />
                  ) : (
                    <Empty className="unlike" />
                  )}
                </button>
                <p className={tweet.userLikes ? "favorite" : ""}>
                  {tweet.likes}
               </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TweetList;