import { useState } from "react";
import "./App.css";

import StartGame from "./component/StartGame";

function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStart((prev) => !prev);
  };
  return (
    <>
      <StartGame />
    </>
  );
}

export default App;
