import React from "react";

function Card({ number, handleChoice, flipped, visible }) {
  const handleClick = (e) => {
    handleChoice(number);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : " "}>
        {!visible ? (
          <div className="
            flex
            justify-center
            items-center
            front text-7xl
            rounded 
            h-full
            w-full 
            text-gray-50 
           ">
            {number.num}
          </div>
        ) : (
          <div
            className=" 
              flex
              text-7xl 
              bg-gray-900 
              text-gray-50
              justify-center
              items-center
              absolute 
              rounded
              h-full
              w-full
            "
          >
            {number.num}
          </div>
        )}

        {!visible ? (
          <div className={" back "} onClick={handleClick}>
            <img src={"favicon.ico"} className={" h-full"} />
          </div>
        ) : (
          <div className="back"> </div>
        )}
      </div>
    </div>
  );
}

export default Card;
