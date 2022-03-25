import { useEffect, useState, useContext } from "react";
import { userContext } from "../../../context/userProvider";
import { onSnapshot } from "firebase/firestore";
import { getCollectionRef } from "../../../Services/CRUD";
import Logo from "../../../multimedia/png/logo.png";
import SignOutGoogle from "../../SignOutGoogle";

const ProfileFake = ({
    setShowProfile,
    showFavorites,
    setShowFavorites,
  }) => {
    const [listaTweets, setListaTweets] = useState([]);
    const { uid, photoURL, color, nameUser } = useContext(userContext);
  
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
  

    
      const handleSetShowFavorites = () => {
        setShowFavorites(true);
      };

      const handleSetShowPosts = () => {
        setShowFavorites(false);
      };

    return (
        
      <div className="container-tweet-list">

          {/****** EMPIEZA NAV BAR  *******/}
              <div className="nav">
            <div className="contain-nav">
                {/* esto tiene q hacer el link hacia el profile */}
                <div onClick={()=>setShowProfile(!true)} className="image"> <p className="backtofeed"> Back to Feed </p></div>
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
        </div>
        <div className="logoprofile">
                <div
                className="profile-pic"
                style={{ backgroundColor: color }}
                >
                <img
                      src={photoURL}
                      className="profilephoto"
                      alt="profile"
                    />

                </div>
                <div
                          className="user-name"
                          style={{ backgroundColor: color }}
                        >
                          {nameUser}
                </div>
        </div>
        {/**********  TERMINA NAVBAR ******************/}

        {/**********  EMPIEZAN BOTONES ******************/}   

        <button onClick={()=>handleSetShowPosts()}>
        Show all!
        </button>
        <button onClick={()=>handleSetShowFavorites()}>
        Show only favourites!
        </button>
        {/**********  TERMINAN BOTONES ******************/} 
        
      </div>
    );
  };

export default ProfileFake;