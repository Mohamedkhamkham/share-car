import { Routes, Route } from 'react-router-dom';
import TripsPage from '../../pages/TripsPage';
import NewTripPage from '../../pages/NewTripsPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<p>INICIO</p>} />
            <Route path={'/misViajes'} element={<TripsPage />} />
            <Route path={'/Crear'} element={<NewTripPage />} />
            <Route path={'/detalles/'} element={<p>Detalles</p>} />

            <Route path={'*'} element={<p>Error</p>} />
        </Routes>
    );
}

export default AppRoutes;
