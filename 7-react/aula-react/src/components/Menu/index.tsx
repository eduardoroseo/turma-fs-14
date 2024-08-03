import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Digital College</Navbar.Brand>
          <Nav className="me-auto">
            <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/usuarios"} className={"nav-link"}>
                Usuários
              </NavLink>
            </li>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
