import { ThemeContext } from '../../contexts/theme.context';
import './Footer.css'
import { useContext } from 'react';
const Footer = () => {

    const { theme } = useContext(ThemeContext)
    const customStyle = {
        backgroundColor: theme === 'white' ? 'black' : 'white'
    }


    return (
        <footer style={customStyle}>Todos los derechos reservados {theme} </footer>

    )
}

export default Footer