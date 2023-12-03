import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown, Image, Col, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/theme.context';
import { AuthContext } from '../../contexts/auth.context';
import logo_negro from '../../assets/logo-sharecar.png';
import logo_blanco from '../../assets/logo_blanco.png';
import sol from '../../assets/sol.png';
import luna from '../../assets/luna.png';
import './Navegation.css';

const Navegation = () => {
    const { theme, swhitchTheme } = useContext(ThemeContext);
    const { loggedUser, logout } = useContext(AuthContext);
    const [expanded, setExpanded] = useState(false);

    const handleNavClose = () => setExpanded(false);

    return (
        <Navbar bg={theme} expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="/">
                    <Link to="/" className="nav-link">
                        {theme === 'light' ? <img src={logo_negro} className='logo' /> : <img src={logo_blanco} className='logo' />}
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav" expanded={expanded}>
                    <Nav className="me-auto justify-content-center" onClick={handleNavClose}>
                        {loggedUser ? (
                            <>
                                <Link to="/misViajes" className="nav-link">
                                    Viajes
                                </Link>
                                <Link to="/misViajes" className="nav-link">
                                    Reservas
                                </Link>
                                <Link to="/misViajes" className="nav-link">
                                    Guardados
                                </Link>



                            </>
                        ) : (
                            <>
                                <Link to="/registro" className="nav-link">
                                    Registro
                                </Link>
                                <Link to="/inicio-sesion" className="nav-link">
                                    Inicio de sesión
                                </Link>
                            </>
                        )}
                    </Nav>
                    {loggedUser &&

                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Brand className='d-flex'>
                                <Link to="/perfil" className="nav-link">
                                    <Image className="perfil" src={loggedUser.imageUrl} roundedCircle />
                                </Link>
                            </Navbar.Brand>
                            <Nav>
                                <Link className='nav-link' onClick={logout}>Cerrar sesión</Link>
                            </Nav>
                        </Navbar.Collapse>

                    }
                    {theme === 'light' ? <img className='luna' src={luna} alt="" size="sm" onClick={swhitchTheme} /> : <img className='luna' src={sol} alt="" size="sm" onClick={swhitchTheme} />}

                </Navbar.Collapse>
            </Container>

            <style>{`
                .navbar {
                    color: ${theme === 'light' ? 'black' : 'white'}; /* Adjust the color based on your needs */
                }

                .navbar-toggler-icon {
                    background-color: ${theme === 'light' ? 'black' : 'white'}; /* Adjust the color based on your needs */
                }

                .nav-link {
                    color: ${theme === 'light' ? 'black' : 'white'} !important; /* Important to override Bootstrap styles */
                }
            `}</style>
        </Navbar>
    );
};

export default Navegation;
