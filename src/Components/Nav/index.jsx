import React from "react";
import { useContext } from "react";
import { userContext } from "../../context/userProvider";
import Logo from "../../multimedia/png/logo.png";

const Nav = ({setShowProfile}) => {
  const { photoURL, color } = useContext(userContext);

  return (
    <div className="nav">
      <div className="contain-nav">
        {/* esto tiene q hacer el link hacia el profile */}
        <div onClick={()=>setShowProfile(true)} className="image">
          <img
            src={photoURL}
            className="photo"
            alt="profile image"
            style={{ borderColor: `${color}` }}
          />
        </div>
        <div className="logo-nav" href="#">
          <img src={Logo} alt="Logo devs United" />
        </div>
        <div href="#" className="text-nav">
          DEVS_<span>UNITED</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;