import React, { useContext } from "react";
import { userContext } from "../../../context/userProvider";
import SignOutGoogle from "../../SignOutGoogle";
import { ReactComponent as Back } from "../../../multimedia/SVG/back.svg";

 const NavProfile = ({ setShowProfile }) => {
  const { nameUser } = useContext(userContext);
  return (
    <div className="nav">
      <div className="contain-nav">
        <SignOutGoogle />
        <div onClick={() => setShowProfile(false)} className="back">
          <Back className="back-svg" /> {nameUser.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default NavProfile;