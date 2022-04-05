import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { SiJavascript } from 'react-icons/si';
import { FaRust } from 'react-icons/fa';

const Header = () =>
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link title="Home" href="#home">Home</Nav.Link>
                    <NavDropdown title="My tests">
                        <NavDropdown.Item title="JS Tests" href="#js-tests"><SiJavascript/> JavaScript</NavDropdown.Item>
                        <NavDropdown.Item title="Rust Tests" href="#rust-tests"><FaRust/> Rust</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

export default Header;