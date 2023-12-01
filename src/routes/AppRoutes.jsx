import { Routes, Route } from 'react-router-dom';
import TripsPage from '../pages/TripsPage';
import NewTripPage from '../pages/NewTripsPage';
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import DetailsTripPage from '../pages/DetailsTripPage';
import ProfilePage from '../pages/ProfilePage';
import PrivateRoute from '../routes/PrivateRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<p>INICIO</p>} />
            <Route path={'/registro'} element={<SignupPage />} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} />

            <Route element={<PrivateRoute />}>
                <Route path={'/perfil'} element={<ProfilePage />} />
                <Route path={'/misViajes'} element={<TripsPage />} />
                <Route path={'/detalles/:trip_id'} element={<DetailsTripPage />} />
                <Route path={'/crear'} element={<NewTripPage />} />
            </Route>
            <Route path={'*'} element={<p>Error</p>} />
        </Routes>
    );
}

export default AppRoutes;


