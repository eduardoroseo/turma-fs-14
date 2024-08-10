import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Users from "./pages/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Menu />
        <Content>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/usuarios" element={<Users />}></Route>
          </Routes>
        </Content>
        <div className="text-center">
          <small>© 2024 - Digital College</small>
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default App;
