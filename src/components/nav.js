import React, { useState } from "react";

const Nav = (props) => {
  console.log(props)
  const onClickHandler = () => {
    props.onClickHandler(!isOpen);
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav role="navigation-mob">
        <div id="menuToggle" onClick={onClickHandler}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
