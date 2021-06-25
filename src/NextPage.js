import React, { useState } from "react";
const NextPage = (props) => {
    console.log(props)
    const nextPage = () => {
      props.nextPage(!isOpen);
      setIsOpen(!isOpen);
    };
      
        const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="button">
      <button className="next" onClick={nextPage}>
        next step
      </button>
    </div>
  );
};
export default NextPage