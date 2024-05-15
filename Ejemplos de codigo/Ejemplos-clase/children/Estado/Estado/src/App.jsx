import "./index.css";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("Titulo por defecto");

  const clickHandler = () => {
    setTitle("Titulo cambiado");
  };

  return (
    <div className="App">
      {title}
      <button style={{ width: "100px", margin: "1rem" }} onClick={clickHandler}>
        Cambiar titulo
      </button>
    </div>
  );
}