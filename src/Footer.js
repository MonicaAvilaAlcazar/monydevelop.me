import { Nav, Navbar, } from 'react-bootstrap';

const Footer = () => (
    <Navbar id="app-header-navigation" expand="lg">
        <Nav>
            <Nav.Item as="li">
                <Nav.Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/MonicaAvilaAlcazar/monydevelop.me"
                >
                    GitHub
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/avilamalcazar/"
                >
                    LinkedIn
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
);

export default Footer;
