import { useState } from "react";
import "./App.css";
import Total from "./components/Total";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showSaludo, setShowSaludo] = useState(false);

  return (
    <>
      <Total>{counter}</Total>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setShowSaludo(!showSaludo)}>Mostrar/Ocultar saludo</button>
      {showSaludo && <h3>Hola, qué tal</h3>}
    </>
  );
};

export default App;
