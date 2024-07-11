import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget} from "./CartWidget";

export const NavBar = () => (    
    <> 
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Jugatelo Virtual Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Claves</Nav.Link>
            <Nav.Link href="#features">Juegos Fisicos</Nav.Link>
            <Nav.Link href="#pricing">Merch</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
    </Navbar>
    </>
);