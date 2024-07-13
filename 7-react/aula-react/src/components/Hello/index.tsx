type HelloProps = {
  nome: string;
};

const Hello = ({ nome }: HelloProps) => {
  return <h1>Hello, {nome}!</h1>;
};

export default Hello;
