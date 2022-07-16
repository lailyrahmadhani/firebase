import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" exact>
              Home
            </Nav.Link>

            <Nav.Link href="/tentang-kami">Tentang Kami</Nav.Link>

            <Nav.Link href="/hubungi-kami">Hubungi Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
