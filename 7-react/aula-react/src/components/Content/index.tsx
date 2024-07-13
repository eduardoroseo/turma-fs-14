import Container from "../Container";

type ContentProps = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return (
    <main className="mt-2 p-3">
      <Container>{children}</Container>
    </main>
  );
};

export default Content;
