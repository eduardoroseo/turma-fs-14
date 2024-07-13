import { ButtonChildren } from "../types";

const ButtonSuccess = ({ children }: ButtonChildren) => {
  return <button className="btn btn-success">{children}</button>;
};

export default ButtonSuccess;
