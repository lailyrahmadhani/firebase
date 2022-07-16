import { Container, Navbar, Nav } from "react-bootstrap";

function ContactUs() {
  return (
    <Container>
      <h1>Hubungi Kami</h1>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Cabang</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Bali</Nav.Link>
            <Nav.Link>Jakarta</Nav.Link>
            <Nav.Link>Padang</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContactUs;
