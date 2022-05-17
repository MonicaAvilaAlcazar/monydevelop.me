import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Nav>
            <Nav.Item as="li">
                <Nav.Link as={Link} to="/">
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link as={Link} to="/about">
                    About
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
)

export default Header
