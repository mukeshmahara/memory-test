import React, { useState } from "react";

let card1 = null,
  card2 = null,
  temp;

let countCardFlip = 0;
function Card({ data }) {
  const [isFliped, setIsFilped] = useState(false);

  const FlipImage = (e) => {
    countCardFlip++;
    temp = e.target;

    // e.target.classList.add("flip-card");
    isFliped ? setIsFilped(false) : setIsFilped(true);
    temp = e.target;
    if (countCardFlip % 2 !== 0) {
      card1 = temp;
    } else card2 = e.target;

    if (countCardFlip === 2) {
      // console.log(!isFliped, countCardFlip, card1 === card2, "test clicke");
      // setIsFilped(!false)
      RemoveCards(card1, card2);
      countCardFlip = 0;
    }
  };

  const RemoveCards = (card1, card2) => {
    console.log(card1,card2)
    if (card1 === card2) {
      card1.remove();
      card2.remove();
    }
  };
  return (
    <div
      className={`${
        isFliped ? "" : ""
      }image-box text-6xl items-center justify-center flex `}
      onClick={FlipImage}
      value={isFliped ? data : "?"}
    >
      {/* {console.log(isFliped)} */}
      <div
        className={
          "" // `${!isFliped}? rotate hidden :block`
        }
      ></div>
      {isFliped ? data : "?"}
    </div>
  );
}

export default Card;
