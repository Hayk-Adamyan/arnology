import Mob from "./mobile/mobile";
import MobMenu from "./mobile/mobMenu";
import Menu from "./menu";
import Nav from "./nav";
import React, { useState } from "react";

export const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const burgerMenuClickHandler = (value) => {
//     setShowMenu(value);
//   };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="./img/arn_logo.png" />
        </div>
        <div className="navigation">
          <div className="ul">
            <ul className="list">
              <li>About</li>
              <li>Services</li>
              <li>Works</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* <Routers /> */}
          <div className="btn1">
            <button className="btn11">Get an estimate</button>
          </div>
        </div>
      </header>
    </>
  );
};
