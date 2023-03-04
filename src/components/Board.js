import React, { useEffect, useState } from "react";
import Card from "./Card";
import Message from "./Message";

const deck = [
  { num: 1, matched: false },
  { num: 2, matched: false },
  { num: 3, matched: false },
  { num: 4, matched: false },
  { num: 5, matched: false },
  { num: 6, matched: false },
  { num: 7, matched: false },
  { num: 8, matched: false },
];

function Board({ tiles }) {
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [nums, setNumbers] = useState([]);
  const [turns, setTurns] = useState(0);
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);

  const handleChoice = (num) => {
    number1 ? setNumber2(num) : setNumber1(num);
  };

  const shuffleNumbers = () => {
    const shuffledNumbers = [...deck, ...deck]
      .sort(() => Math.random() - 0.5)
      .map((number) => ({ ...number, id: Math.random() }));

    setNumbers(shuffledNumbers);
    setTurns(0);
  };

  useEffect(() => {
    shuffleNumbers();
    setTimeout(() => makeVisible(), 2000);
  }, []);

  const makeVisible = () => {
    setVisible(false);
  };
  useEffect(() => {
    
    if (number1 && number2) {
      if (number1.num === number2.num) {
        setNumbers((prevNums) => {
          return prevNums.map((nums) => {
            if (nums.num === number1.num) {
              return { ...nums, matched: true };
            } else {
              return nums;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [number1, number2]);

  const resetTurn = () => {
    setNumber1(null);
    setNumber2(null);
    setTurns((prevTurns) => prevTurns + 1);
  };
  return (
    <div className="">
      {visible ? (
        <div className="shadow font-bold animate-bounce border rounded-full p-3">
          Remember the position of similar numbers
        </div>
      ) : (
        ""
      )}
      <div className="flex  justify-center ">
        {!visible ? <>flipped Pairs: {turns}</> : ""}
        <div className="card-grid">
          {nums.map((num) => (
            <div key={num.id} className="">
              <Card
                number={num}
                handleChoice={handleChoice}
                flipped={num === number1 || num === number2 || num.matched}
                visible={visible}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
