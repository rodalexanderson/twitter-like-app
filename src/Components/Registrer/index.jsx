import React, { useContext, useState } from "react";
import { ReactComponent as Logo } from "../../multimedia/SVG/logo.svg";
import useInput from "../../Hooks/useInput";
import { updateData } from "../../Services/CRUD";
import { userContext } from "../../context/userProvider";
import User from "../User";

const Register = () => {
  const { uid, color } = useContext(userContext);
  const [favoriteColor, setFavoriteColor] = useState("");
  const [nameUser, handleSendNameUser, clearNameUser] = useInput(null);

  const handlePickColor = (e) => {
    setFavoriteColor(e.target.attributes.color.nodeValue);
  };

  const handleSendRegister = async () => {
    await updateData("users", uid, {
      nameUser,
      color: favoriteColor,
    });
    clearNameUser();
  };

  return (
    <>
      {!color ? (
        <div>
          <div className="login-container">
            <div className="logo-container">
            <img src={Logo} alt="Logo Devs United" className="logo"/>
            </div>
            <div className="section-credentials">
              <div className="container-contain">
                <div className="welcome-text">
                  WELCOME
                  <br /> <span>NAME!</span>
                </div>
                <input
                  className="type-username"
                  type="text"
                  value={nameUser}
                  placeholder="Type your username"
                  onChange={handleSendNameUser}
                />
              </div>
              <div className="favorite-color">
                <p className="text-favorite-color">
                  Select your favorite color
                </p>
                <div className="container-colors">
                  <div
                    className="box red"
                    color="#f50d5a"
                    onClick={handlePickColor}
                  ></div>
                  <div
                    className="box orange"
                    color="#ff865c"
                    onClick={handlePickColor}
                  ></div>
                  <div
                    className="box yellow"
                    color="#ffea5c"
                    onClick={handlePickColor}
                  ></div>
                  <div
                    className="box green"
                    color="#00da76"
                    onClick={handlePickColor}
                  ></div>
                  <div
                    className="box blue"
                    color="#0096ce"
                    onClick={handlePickColor}
                  ></div>
                  <div
                    className="box purple"
                    color="#800fff"
                    onClick={handlePickColor}
                  ></div>
                </div>
                <button
                  className="button-continue"
                  onClick={() => {
                    handleSendRegister();
                  }}
                  disabled={
                    nameUser.length > 0 && favoriteColor.length > 0
                      ? false
                      : true
                  }
                >
                  CONTINUE
                </button>
              </div>
              <p className="text-footer">
                © 2022 Devs_United by <br />
                Mario A Conti - <span>BETA</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <User />
      )}
    </>
  );
};

export default Register;