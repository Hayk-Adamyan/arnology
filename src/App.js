import "./App.css";
import "./components/pageOne.css";
import "./components/mobile/mobi.css";
import "./components/mobile/mobMenu.css";
import "./components/menu.css";
import { PageOne } from "./components/pageOne";
import Nav from "./components/nav";
import Menu from "./components/menu";
import React, { useState } from "react";
import NextPage from "./NextPage";
import { Moredetails } from "./components/Moredetails";
import { Project } from "./components/Project";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [ShowForm, setSowForm] = useState(false);

  const burgerMenuClickHandler = (Value) => {
    setShowMenu(Value);
  };
  const MoredetailsClickHandler = (Value) => {
    setSowForm(Value);
  };

  return (
    <div className="main">
      {showMenu && <Menu />}
      <Nav onClickHandler={burgerMenuClickHandler} />
      {!showMenu && <PageOne />}

      {/* {ShowForm && <Moredetails />}
      <NextPage nextPage={MoredetailsClickHandler} />
      {!ShowForm && <Project />} */}
    </div>
  );
};

export default App;
