import React from "react";
import { useContext } from "react";
import { userContext } from "../../context/userProvider";
import Logo from "../../multimedia/png/logo.png";
import SignOutGoogle from "../SignOutGoogle";

const Nav = ({setShowProfile}) => {
  const { photoURL, color } = useContext(userContext);

  return (
    <div className="nav">
      <div className="contain-nav">
        {/* Funcion para ir al Profile */}
        <div onClick={()=>setShowProfile(true)} className="image">
          <img
            src={photoURL}
            className="photo"
            alt="profile"
            style={{ borderColor: `${color}` }}
          />
        </div>
        <div className="logo-nav" href="#">
          <img src={Logo} alt="Logo devs United" width={80} />
         <div  href="#" className="text-nav">
          DEVS_<span>UNITED</span>
         </div>
        </div>
        <div href="#" className="text-nav">
          <SignOutGoogle/>
        </div>
      </div>
    </div>
  );
};

export default Nav;