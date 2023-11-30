import { Navbar, Nav, Container, Button, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import { ThemeContext } from '../../contexts/theme.context'
// import { AuthContext } from '../../contexts/auth.context'


const Navigation = () => {

    // const { theme, swhitchTheme } = useContext(ThemeContext)
    // const { loggedUser, logout } = useContext(AuthContext)

    return (
        <Navbar bg='primary' data-bs-theme='primary' className='mb-4'>
            <Container>
                <Navbar.Brand href="#">Share Car</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className='nav-link'>Inicio</Link>
                        <Link to={'/misViajes'} className='nav-link'>Mis viajes</Link>
                        <Link to={'/crear'} className='nav-link'>Crear</Link>
                        <Link to={'/registro'} className='nav-link'>Registro</Link>
                        <Link to={'/inicio-sesion'} className='nav-link'>Iniciar sesión</Link>
                        {/* <Link to={'/crear'} className='nav-link'>Cerrar sesión</Link> */}


                        {
                            // loggedUser
                            //     ?
                            //     <>
                            //         <span className='nav-link' onClick={logout}>Cerrar sesión</span>
                            //     </>
                            //     :
                            //     <>
                            //         <Link to={'/registro'} className='nav-link'>Registro</Link>
                            //         <Link to={'/inicio-sesion'} className='nav-link'>Inicio de sesión</Link>
                            //     </>
                        }

                    </Nav>

                    <Navbar.Text className="justify-content-end">
                        {/* {loggedUser && <Navbar.Text>¡Hola, {loggedUser.username}!</Navbar.Text>} */}
                        <Button variant={'light'} size='sm'>Tema </Button>
                    </Navbar.Text>



                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default Navigation