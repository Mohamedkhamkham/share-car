import { Routes, Route } from 'react-router-dom';
import TripsPage from '../pages/TripsPage';
import NewTripPage from '../pages/NewTripsPage';
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import DetailsTripPage from '../pages/DetailsTripPage';
import ProfilePage from '../pages/ProfilePage';
import PrivateRoute from '../routes/PrivateRoute';
import ReservaPage from '../pages/ReservasPage';
import FavoritosPage from '../pages/Favoritos';
import MapPage from '../pages/MapPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<p>INICIO</p>} />
            <Route path={'/registro'} element={<SignupPage />} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} />
            <Route path={'/map'} element={<MapPage />} />

            <Route element={<PrivateRoute />}>
                <Route path={'/perfil'} element={<ProfilePage />} />
                <Route path={'/viajes'} element={<TripsPage />} />
                <Route path={'/misReservas'} element={<ReservaPage />} />
                <Route path={'/misFavoritos'} element={<FavoritosPage />} />
                <Route path={'/detalles/:trip_id'} element={<DetailsTripPage />} />
                <Route path={'/crear'} element={<NewTripPage />} />
            </Route>
            <Route path={'*'} element={<p>Error</p>} />
        </Routes>
    );
}

export default AppRoutes;


