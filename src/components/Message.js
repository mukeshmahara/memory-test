import React from "react";

function Message({ message }) {
  return (
    <div className="text-blue-300 bg-green-500">
      {message}
    </div>
  );
}

export default Message;
