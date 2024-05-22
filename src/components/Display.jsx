import React from "react";

const Display = ({ displayInput }) => {
  const checkThreeConsecutive = displayInput => {
    let count = 1;
    for (let i = 0; i < displayInput.length; i++) {
      if (displayInput[i] === displayInput[i + 1]) {
        count++;
      } else {
        count = 1;
      }
      if (count === 3) {
        // if (displayInput[length - 1] === "_") {
        //   displayInput.pop();
        //   displayInput.pop();

        //   displayInput.push("_");
        // }
        displayInput.pop();
        displayInput.pop();
        displayInput.pop();
        displayInput.push("_");
      }
    }
    return false;
  };
  checkThreeConsecutive(displayInput);

  return (
    <div className="border border-gray-400 rounded py-2 mx-2">
      {displayInput.length === 0 ? "Type something" : displayInput}
    </div>
  );
};

export default Display;
