import { Routes, Route } from 'react-router-dom';
import TripsPage from '../../pages/TripsPage';
import NewTripPage from '../../pages/NewTripsPage';
import SignupPage from '../../pages/SignupPage'
import LoginPage from '../../pages/LoginPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<p>INICIO</p>} />
            <Route path={'/misViajes'} element={<TripsPage />} />
            <Route path={'/detalles/'} element={<p>Detalles</p>} />
            <Route path={'/Crear'} element={<NewTripPage />} />
            <Route path={'/registro'} element={<SignupPage />} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} />

            <Route path={'*'} element={<p>Error</p>} />
        </Routes>
    );
}

export default AppRoutes;
