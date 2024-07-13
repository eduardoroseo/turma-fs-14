import { ButtonChildren } from "../types";

const ButtonWarning = ({ children }: ButtonChildren) => {
  return <button className="btn btn-warning">{children}</button>;
};

export default ButtonWarning;
