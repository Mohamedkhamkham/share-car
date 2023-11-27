import { Navbar, Nav, Container, Button, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">

            <Container>
                <Navbar.Brand href="#">Share Car</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Link to={'/'} className='nav-link'>Inicio</Link>
                        <Link to={'/misViajes'} className='nav-link'>Mis viajes</Link>
                        <Link to={'/crear'} className='nav-link'>Crear</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default Navigation