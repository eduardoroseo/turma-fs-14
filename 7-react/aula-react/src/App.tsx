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
      <div className="text-center">
        <small>© 2024 - Digital College</small>
      </div>
    </Container>
  );
};

export default App;
