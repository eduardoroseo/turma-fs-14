import { Button } from "react-bootstrap";
import { ButtonChildren } from "../types";

const ButtonDanger = ({ children, onClick }: ButtonChildren) => {
  return (
    <Button variant="danger" onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonDanger;
