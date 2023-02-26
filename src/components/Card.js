import React from "react";

function Card({ number, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(number);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : " "}>
        <div className="front text-7xl rounded h-full w-full content-center text-red-500  items-center ">
          {number.num}
        </div>
        <div className=" back rounded " onClick={handleClick}>
          <img src="favicon.ico" className=" h-full" />
        </div>
      </div>
    </div>
  );
}

export default Card;
