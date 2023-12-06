// Footer.js

import { ThemeContext } from '../../contexts/theme.context';
import './Footer.css';
import { useContext } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    const customStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
    };

    return (
        <footer style={customStyle} className="text-center p-3">
            <div className="container">
                <p className="mb-1 h6">ShareCar &copy; {new Date().getFullYear()}</p>
                <div className="mt-2">
                    {/* Ajusta el tamaño de los iconos */}
                    <a href="https://www.linkedin.com/in/mohamed-khamkham-85192a114/?originalSubdomain=es/" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://mail.google.com/" className="icon-link">
                        <FaEnvelope /> Gmail
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
