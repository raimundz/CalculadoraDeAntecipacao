import { useState } from "react";
import { MainContainer } from "./components/container";
import "./App.css";
//validação de dados e tratativa de erros com yup
//usar o timeout pra alguns possiveiss problemas com a api
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
