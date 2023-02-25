import React, { useState } from "react";
import Card from "./Card";

function Board({ tiles }) {
  
  return (
    <div>
      {[1, 1, 3, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
        (item, index) => (
          <div
            key={index}
            id={index}
          >
            <Card data={item}/>
          </div>
        )
      )}
    </div>
  );
}

export default Board;
