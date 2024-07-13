import Container from "../Container";

type ContentProps = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};

export default Content;
