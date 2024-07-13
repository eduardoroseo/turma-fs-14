import { Container, Nav, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <header>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Digital College</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#usuarios" active={true}>
              Usuários
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
