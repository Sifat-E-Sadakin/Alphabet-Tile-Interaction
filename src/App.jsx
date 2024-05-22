import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "./components/Display";
import AlphabetKeys from "./components/AlphabetKeys";

function App() {
  const [displayInput, setDisplayInput] = useState([]);
  const catchClick = key => {
    const customArr = [];
    customArr.push(key);
    setDisplayInput([...displayInput, ...customArr]);
  };

  return (
    <>
      <Display displayInput={displayInput} />
      <AlphabetKeys catchClick={catchClick} />
    </>
  );
}

export default App;
