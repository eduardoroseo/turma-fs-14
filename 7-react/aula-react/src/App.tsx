import Container from "./components/Container";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Users from "./pages/Users";

const App = () => {
  return (
    <Container>
      <Menu />
      <Content>
        <Users />
      </Content>
    </Container>
  );
};

export default App;
