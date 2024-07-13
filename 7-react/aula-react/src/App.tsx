import { Button } from "react-bootstrap";
import { ButtonDanger } from "./components/Buttons";

const App = () => {
  return (
    <div className="container">
      <Button variant="success">Clique aqui</Button>
      <Button variant="warning">Clique aqui</Button>
      <ButtonDanger onClick={() => alert("perigo")}>Clique aqui</ButtonDanger>
      <ButtonDanger onClick={() => alert("não tao perigo assim")}>
        Clique aqui
      </ButtonDanger>
    </div>
  );
};

export default App;
