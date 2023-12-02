import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/theme.context';
import { AuthContext } from '../../contexts/auth.context';
import logo from '../../assets/logo.png';
import sol from '../../assets/sol.svg';
import luna from '../../assets/luna.png';
import './Navegation.css';

const Navegation = () => {
    const { theme, swhitchTheme } = useContext(ThemeContext);
    const { loggedUser, logout } = useContext(AuthContext);
    const [expanded, setExpanded] = useState(false);

    const handleNavClose = () => setExpanded(false);
// style={{ color: isDarkMode ? 'white' : 'black' }}
    return (
        <Navbar bg={theme} expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="/">
                    <h1>SHARE CAR</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav" expanded={expanded}>
                    <Nav className="me-auto justify-content-center" onClick={handleNavClose}>
                        {loggedUser ? (
                            <>
                                <Link to="/" className="nav-link">
                                    Inicio
                                </Link>
                                <Link to="/misViajes" className="nav-link">
                                    Mis viajes
                                </Link>
                                <Link to="/crear" className="nav-link">
                                    Crear
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
                    <Navbar.Text className="justify-content-end">
                        {loggedUser &&
                            // <span>¡Hola, {loggedUser.username}!</span>
                            <NavDropdown title={`¡Hola, ${loggedUser.username}!`} id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="/perfil" className="nav-link">
                                        Perfil
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={logout}>Cerrar sesión</NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Navbar.Text>
                        {/* <Button variant="light" size="sm" onClick={swhitchTheme}> */}
                        <img className='luna' src={luna} alt="" size="sm" srcset="" onClick={swhitchTheme} />
                             {/* {theme === 'light' ? 'oscuro' : 'claro'} */}
                        {/* </Button> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navegation;
