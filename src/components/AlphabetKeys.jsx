import React from "react";

const AlphabetKeys = ({ catchClick }) => {
  const keys = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 justify-center ">
      {keys.map(key => (
        <button
          className="bg-slate-400 px-3 py-1 m-2 hover:bg-slate-500 hover:text-white duration-300 rounded "
          key={key}
          onClick={() => catchClick(key)}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default AlphabetKeys;
