import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";

const App = () => {
  const [nome, setNome] = useState("Edu");
  const [pessoas, setPessoas] = useState<string[]>([]);

  function addPessoa(nome: string) {
    setPessoas([...pessoas, nome]);
  }

  return (
    <>
      <input
        type="text"
        value={nome}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            addPessoa(nome);
            setNome("");
          }
        }}
        onChange={(e) => setNome(e.target.value)}
      />
      <Hello nome={nome} />
      <ul>
        {pessoas.map((nomeFulano, index) => (
          <li key={index}>{nomeFulano}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
