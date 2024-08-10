export type ButtonChildren = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
};
