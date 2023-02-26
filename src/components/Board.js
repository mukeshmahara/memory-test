import React, { useEffect, useState } from "react";
import Card from "./Card";

const numbers = [
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
  const [nums, setNumbers] = useState([]);
  const [turns, setTurns] = useState(0);
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);

  const handleChoice = (num) => {
    number1 ? setNumber2(num) : setNumber1(num);
  };

  const shuffleNumbers = () => {
    const shuffledNumbers = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .map((number) => ({ ...number, id: Math.random() }));

    setNumbers(shuffledNumbers);
    setTurns(0);
  };

  // const RandomizedNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  //   .map((item) => ({ item, sort: Math.random() }))
  //   .sort((num1, num2) => num1.sort - num2.sort)
  //   .map(({ item }) => item);

  useEffect(() => {
    if (number1 && number2) {
      if (number1.num === number2.num) {
        setNumbers((prevNums) => {
          return prevNums.map((nums) => {
            console.log(nums === number1, "hahhaha");
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
      <button
        onClick={shuffleNumbers}
        className="border px-5 py-3 rounded text-3xl bg-indigo-50"
      >
        Start
      </button>

      <div className="flex  justify-center ">
        <div className="card-grid">
          {nums.map((num) => (
            <div key={num.id} className="">
              <Card
                number={num}
                handleChoice={handleChoice}
                flipped={num === number1 || num === number2 || num.matched}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
