import { ButtonChildren } from "../types";

const ButtonSuccess = ({ children, onClick, disabled }: ButtonChildren) => {
  return <button onClick={onClick} disabled={disabled} className="btn btn-success">{children}</button>;
};

export default ButtonSuccess;
