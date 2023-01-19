import { useState } from "react";
import { MainContainer } from "./components/container";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
