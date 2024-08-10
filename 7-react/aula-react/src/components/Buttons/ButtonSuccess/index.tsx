import { ButtonChildren } from "../types";

const ButtonSuccess = ({
  children,
  onClick,
  disabled,
  type,
}: ButtonChildren) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="btn btn-success"
    >
      {children}
    </button>
  );
};

export default ButtonSuccess;
