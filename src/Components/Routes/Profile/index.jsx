import { useEffect, useState, useContext } from "react";
import { userContext } from "../../../context/userProvider";
import { onSnapshot } from "firebase/firestore";
import { getCollectionRef } from "../../../Services/CRUD";
import { ReactComponent as Heart } from "../../../multimedia/SVG/solid.svg";
import { ReactComponent as Empty } from "../../../multimedia/SVG/empty.svg";
import { ReactComponent as Bin } from "../../../multimedia/SVG/bin.svg";
import { handleLike } from "../../../Functions";
import { handleDelete } from "../../../Functions";
import Logo from "../../../multimedia/png/logo.png";
import SignOutGoogle from "../../SignOutGoogle";

const ProfileFake = ({
    setShowProfile,
    setShowPosts,
    setShowFavorites,
  }) => {
    const [listaTweets, setListaTweets] = useState([]);
    const { uid, photoURL, color } = useContext(userContext);
  
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

          {/****** EMPIEZA NAV BAR  *******/}
              <div className="nav">
        <div className="contain-nav">
                {/* esto tiene q hacer el link hacia el profile */}
                {/* <Link to="/profile">Profile</Link> */}
                <div onClick={()=>setShowProfile(!true)} className="image"> <p> Username </p></div>
                <div className="logo-nav" href="#">
                <img src={Logo} alt="Logo devs United" width={100} />
                <div  href="#" className="text-nav">
                DEVS_<span>UNITED</span>
                </div>
                </div>
                <div href="#" className="text-nav">
                <SignOutGoogle/>
                </div>
        </div>
        {/**********  TERMINA NAVBAR ******************/}
        </div>
        <div className="logoprofile">
        <img
          src={photoURL}
          className="profilephoto"
          alt="profile image"
          width={600}
        />
        </div>
        {listaTweets.map((tweet) => {
          return (
            uid === tweet.uid && (
                <div className="tweet-container" key={tweet.id}>
                  <div
                    onClick={uid === tweet.uid ? handleInProfile : null}
                    className="image-profile"
                  >
                    <img
                      src={photoURL}
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
                          <Heart className="like" />
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

export default ProfileFake;